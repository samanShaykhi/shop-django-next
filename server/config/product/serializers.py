from rest_framework import serializers
from .models import Product, ProductImage, Category, Comment, Order, OrderItem
from accounts.serializers import UserSrializerForComment
from PIL import Image
from django.db.models import Avg
from random import sample


# Developing custom Function for validation image
def validation_product_image(file):
    ALLOWED_FORMATS = {"JPEG", "PNG", "WEBP"}
    MAX_FILE_SIZE = 4 * 1024 * 1024
    MAX_WIDTH = 6000
    MAX_HEIGHT = 6000

    if file.size > MAX_FILE_SIZE:
        raise serializers.ValidationError("تصاویر نباید از 4 مگابایت بیشتر باشد.")
    try:
        img = Image.open(file)
        if img.format not in ALLOWED_FORMATS:
            raise serializers.ValidationError(
                "فرمت تصویر باید jpeg یا png یا webp باشد."
            )
        width, height = img.size
        if width > MAX_WIDTH:
            raise serializers.ValidationError("عرض تصویر بیش از حد مجاز است.")

        if height > MAX_HEIGHT:
            raise serializers.ValidationError("ارتفاع تصویر بیش از حد مجاز است.")
        img.verify()

    except serializers.ValidationError:
        raise
    except Exception:
        raise serializers.ValidationError("تصویر نامعتبر است.")

    file.seek(0)

    return file


class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductImage
        fields = [
            "id",
            "image",
            "alt_text",
            "is_primary",
            "sort_order",
        ]


class CommenSerializer(serializers.ModelSerializer):
    user = UserSrializerForComment()

    class Meta:
        model = Comment
        fields = ("id", "content", "user", "star", "created_at")


class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True)
    average_star = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = "__all__"

    def get_average_star(self, obj):
        return (
            obj.comments.filter(is_active=True).aggregate(avg=Avg("star"))["avg"] or 0
        )


class ProductSrilizerForSinglePage(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True)
    comments = CommenSerializer(many=True)
    average_star = serializers.SerializerMethodField()
    related_products = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = "__all__"

    def get_average_star(self, obj):
        return (
            obj.comments.filter(is_active=True).aggregate(avg=Avg("star"))["avg"] or 0
        )

    def get_related_products(self, obj):

        products = list(
            Product.objects.filter(category__in=obj.category.all())
            .exclude(id=obj.id)
            .distinct()
        )
        products = sample(products, min(4, len(products)))

        return ProductSerializer(products, many=True, context=self.context).data


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class GalleryUploadSerializer(serializers.Serializer):
    images = serializers.ListField(
        min_length=1, max_length=12, child=serializers.ImageField()
    )

    def validate(self, attrs):
        product = self.context["product"]
        current_count = product.images.count()

        if current_count + len(attrs["images"]) > 12:
            raise serializers.ValidationError("حداکثر 10 تصویر مجاز است.")

        return attrs

    def validate_images(self, images):
        for image in images:
            validation_product_image(image)
        return images


class CartItemSerializer(serializers.Serializer):

    id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)


class CartSerializer(serializers.Serializer):

    items = CartItemSerializer(many=True)


class OrderItemSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)


class CreateOrderSerializer(serializers.Serializer):

    note = serializers.CharField(required=False, allow_blank=True)
    items = OrderItemSerializer(many=True, min_length=1)


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = (
            "id",
            "product",
            "quantity",
            "price",
        )


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = (
            "id",
            "status",
            "items",
            "created_at",
            "note",
            "order_number",
            "address",
        )
