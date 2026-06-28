from rest_framework import serializers
from .models import Article
import re


class SerializerArticle(serializers.ModelSerializer):
    body = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = "__all__"

    def get_body(self, obj):

        request = self.context.get("request")

        html = obj.body

        html = re.sub(
            r'src="\.\./\.\./\.\./\.\./media/',
            f'src="{request.build_absolute_uri("/media/")}',
            html,
        )

        return html
