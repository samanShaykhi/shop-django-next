from django.contrib import admin
from . import models


# Register your models here.
@admin.register(models.Article)
class AdminProduct(admin.ModelAdmin):
    list_display = ("title", "category")
    list_filter = ("category", "create_at")

@admin.register(models.Category)
class AdminCategory(admin.ModelAdmin):
    list_display = ("title", "slug")
    