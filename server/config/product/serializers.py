from rest_framework import serializers
from .models import Product
from PIL import Image


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


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
