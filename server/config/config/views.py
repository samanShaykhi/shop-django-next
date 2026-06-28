from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from rest_framework.views import APIView
from rest_framework.response import Response
from product.models import Product
from article.models import Article
from product.serializers import ProductSerializer
from article.serializers import SerializerArticle
from rest_framework import status


@csrf_exempt
def upload_image(request):
    if request.method == "POST":
        file = request.FILES.get("file")

        path = default_storage.save(f"articles/{file.name}", file)
        url = default_storage.url(path)

        return JsonResponse({"location": url})


class getDataForPageCenter(APIView):

    def get(self, request):
        womansCat = Product.objects.filter(category__slug="Womens-clothing").order_by(
            "-created_at"
        )[:12]
        mensCat = Product.objects.filter(category__slug="Mens-clothing").order_by(
            "-created_at"
        )[:12]
        articles = Article.objects.order_by("-create_at")[:12]
        return Response(
            {
                "womansCat": ProductSerializer(
                    womansCat,
                    many=True,
                    context={"request": request},
                ).data,
                "mensCat": ProductSerializer(
                    mensCat,
                    many=True,
                    context={"request": request},
                ).data,
                "articles": SerializerArticle(
                    articles,
                    many=True,
                    context={"request": request},
                ).data,
            },
            status=status.HTTP_200_OK,
        )
