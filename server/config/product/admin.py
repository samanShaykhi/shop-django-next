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
    list_filter = ("is_active", "created_at")
    search_fields = ("title", "discription")
    list_editable = ("stock",)
    readonly_fields = ("created_at", "update_at")
    inlines = [
        ProductImageInline,
    ]


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("user", "status")
    list_filter = ("status", "created_at")
    search_fields = ("note",)
    readonly_fields = ("created_at",)
    list_editable = ("status",)


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("user", "product","is_active")
    list_filter = ("user", "star")
    search_fields = ("content",)
    readonly_fields = ("created_at",)
    list_editable = ("is_active",)


@admin.register(models.OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("order", "product", "quantity", "price")
    list_filter = ("order", "product")
    search_fields = ("product",)
    # readonly_fields = ("created_at",)
    list_editable = ("price",)


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
