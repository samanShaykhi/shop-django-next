from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleView, singleArticle

router = DefaultRouter()
router.register("articles", ArticleView)
router.register("single-article", singleArticle, basename="single-article")


urlpatterns = [
    path("", include(router.urls)),
    path("tinymce/", include("tinymce.urls")),
]
