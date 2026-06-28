from django.db import models
from versatileimagefield.fields import VersatileImageField
from tinymce.models import HTMLField

# Create your models here.


class Category(models.Model):
    title = models.CharField(
        max_length=80,
        verbose_name="عنوان دسته",
        null=True,
    )
    slug = models.CharField(
        max_length=80,
        verbose_name="url دسته",
        unique=True,
        db_index=True,
        null=True,
    )

    class Meta:
        verbose_name = "دسته"
        verbose_name_plural = "دسته ها"
        ordering = ["-id"]

    def __str__(self):
        return f"{self.title}"


class Article(models.Model):
    title = models.CharField(max_length=300, verbose_name="عنوان مقاله")
    short_discription = models.CharField(max_length=300, verbose_name="توضیحات کوتاه")

    image_article = VersatileImageField(
        upload_to="articles/thumbnail/", verbose_name="پوستر مقاله"
    )
    slug = models.CharField(max_length=200, verbose_name="مسیر url مقاله", unique=True)
    body = HTMLField(verbose_name="مقاله")
    create_at = models.DateField(auto_now_add=True, verbose_name="تاریخ ایجاد")
    category = models.ForeignKey(
        "Category",
        on_delete=models.CASCADE,
        related_name="articles",
        verbose_name="دسته مقاله",
    )

    class Meta:
        verbose_name = "مقاله"
        verbose_name_plural = "مقالات"
        ordering = ["-id"]
