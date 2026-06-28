from django.shortcuts import get_object_or_404
from django.db import transaction
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError

from .serializers import (
    ProductSerializer,
    GalleryUploadSerializer,
    CategorySerializer,
    ProductSrilizerForSinglePage,
    CartSerializer,
    CreateOrderSerializer,
    OrderSerializer,
)
from .models import Product, ProductImage, Category, Order, OrderItem
from accounts.models import Address
from .pagination import ProductPagenation
from .filters import ProductFilter

# Create your views here.


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagenation


class UploadProductGalleryImageView(APIView):
    @transaction.atomic
    def post(self, req, product_id):
        serializer = GalleryUploadSerializer(data=req.data)
        serializer.is_valid(raise_exception=True)
        product = Product.objects.get(pk=product_id)
        images = []
        try:
            for file in serializer.validated_data["images"]:
                obj = ProductImage.objects.create(product=product, image=file)
                images.append(obj)
            return Response("create Image", status=status.HTTP_200_OK)
        except Exception:
            for image in images:
                if image.image:
                    image.image.delete(save=False)
            raise


class CategoryView(viewsets.ReadOnlyModelViewSet):
    serializer_class = CategorySerializer

    queryset = Category.objects.filter(parent__isnull=True)
    # queryset = Category.objects.all()


class ProductFilterListView(ListAPIView):

    serializer_class = ProductSerializer
    pagination_class = ProductPagenation
    queryset = Product.objects.select_related("seller").prefetch_related("category")

    filter_backends = [DjangoFilterBackend, OrderingFilter]

    filterset_class = ProductFilter

    ordering_fields = [
        "price",
        "created_at",
        "orders",
    ]

    ordering = ["-created_at"]


class SinleProductView(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSrilizerForSinglePage
    lookup_field = "slug"


class CartProductsView(APIView):
    def post(self, request):
        serializer = CartSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        items = serializer.validated_data["items"]

        quantity_map = {item["id"]: item["quantity"] for item in items}

        products = Product.objects.filter(
            id__in=quantity_map.keys(),
            is_active=True,
        )

        result = []

        for product in products:

            quantity = quantity_map[product.id]

            if quantity > product.stock:
                quantity = product.stock

            data = ProductSerializer(
                product,
                context={"request": request},
            ).data

            data["quantity"] = quantity

            result.append(data)

        return Response(result, status=status.HTTP_200_OK)


class CreateOrderView(APIView):

    permission_classes = [IsAuthenticated]

    @transaction.atomic
    def post(self, request):

        serializer = CreateOrderSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        items = serializer.validated_data["items"]

        note = serializer.validated_data.get("note", "")
        address = get_object_or_404(
            Address,
            user=request.user,
        )
        order = None
        for _ in range(5):

            try:

                order = Order.objects.create(
                    user=request.user,
                    note=note,
                    address={
                        "receiver_name": address.receiver_name,
                        "province_city": address.province_city,
                        "address": address.address,
                        "address_details": address.address_details,
                        "postal_code": address.postal_code,
                        "receiver_phone": address.receiver_phone,
                    },
                )

                break

            except IntegrityError:

                continue

        if order is None:
            raise Exception("خطا در ساخت شماره سفارش")

        for item in items:

            product = Product.objects.select_for_update().get(id=item["id"])

            quantity = item["quantity"]

            if product.stock < quantity:
                return Response(
                    {"detail": f"{product.name} موجودی کافی ندارد."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity,
                price=product.price,
            )

            product.stock -= quantity

            product.save()

        return Response(
            {"order_id": order.id, "message": "سفارش ثبت شد."},
            status=status.HTTP_201_CREATED,
        )


class Get_MyOrders(viewsets.ReadOnlyModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return (
            Order.objects.filter(user=self.request.user)
            .prefetch_related(
                "items",
                "items__product",
                "items__product__images",
                "items__product__category",
                "items__product__comments",
            )
            .order_by("-created_at")
        )
