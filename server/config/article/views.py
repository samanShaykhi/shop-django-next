from django.shortcuts import render
from rest_framework import viewsets

from .models import Article
from .serializers import SerializerArticle
from .pagination import PaginationArticles

# Create your views here.


class ArticleView(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = SerializerArticle
    pagination_class = PaginationArticles
