from django.contrib import admin
from . import models
from adminsortable2.admin import SortableInlineAdminMixin
from adminsortable2.admin import SortableAdminBase

# Register your models here.


class ProductImageInline(
    SortableInlineAdminMixin,
    admin.TabularInline,
):
    model = models.ProductImage
    extra = 1


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin, SortableAdminBase):
    list_display = ("title", "seller", "is_active", "price", "stock")
    list_filter = ("is_active", "create_at")
    search_fields = ("title", "discription")
    list_editable = ("stock",)
    readonly_fields = ("create_at", "update_at")
    inlines = [
        ProductImageInline,
    ]


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("user", "product", "status")
    list_filter = ("status", "create_at")
    search_fields = ("note",)
    readonly_fields = ("create_at",)
    list_editable = ("status",)


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "slug")
    list_filter = ("title", "slug")
    search_fields = ("slug",)


@admin.register(models.ProductImage)
class AdminProductImage(admin.ModelAdmin):
    list_display = ("product", "image")
    list_filter = ("alt_text",)
    search_fields = ("image", "alt_text")
