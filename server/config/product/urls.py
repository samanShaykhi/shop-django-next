from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductView,UploadProductGalleryImageView

router = DefaultRouter()
router.register(r"porducts", ProductView)


urlpatterns = [
    path("", include(router.urls)),
    path("upload/<int:product_id>",UploadProductGalleryImageView.as_view())
]
