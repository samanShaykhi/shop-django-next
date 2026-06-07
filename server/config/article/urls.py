from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleView

router = DefaultRouter()
router.register(r"", ArticleView)


urlpatterns = [
    path("", include(router.urls)),
]
