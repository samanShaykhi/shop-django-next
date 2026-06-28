from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProductView,
    UploadProductGalleryImageView,
    ProductFilterListView,
    CategoryView,
    SinleProductView,
    CartProductsView,
    CreateOrderView,
    Get_MyOrders,
)

router = DefaultRouter()
# router.register(r"porducts", ProductView)
router.register("product/categories", CategoryView)
router.register("products/singleproduct", SinleProductView)
router.register("getmyorders", Get_MyOrders, basename="getmyorders")

urlpatterns = [
    path("", include(router.urls)),
    path("upload/<int:product_id>", UploadProductGalleryImageView.as_view()),
    path("products/", ProductFilterListView.as_view()),
    path("cart", CartProductsView.as_view()),
    path("order", CreateOrderView.as_view()),
]
