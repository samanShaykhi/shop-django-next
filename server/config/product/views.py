from django.shortcuts import render
from django.db import transaction
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ProductSerializer, GalleryUploadSerializer
from .models import Product, ProductImage
from .pagination import ProductPagenation

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
