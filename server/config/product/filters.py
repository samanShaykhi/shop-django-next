from django_filters import rest_framework as filters

from .models import Product


class ProductFilter(filters.FilterSet):

    min_price = filters.NumberFilter(
        field_name="price",
        lookup_expr="gte"
    )

    max_price = filters.NumberFilter(
        field_name="price",
        lookup_expr="lte"
    )

    min_rating = filters.NumberFilter(
        field_name="rating",
        lookup_expr="gte"
    )

    category = filters.CharFilter(
        field_name="category__slug"
    )

    class Meta:
        model = Product
        fields = []