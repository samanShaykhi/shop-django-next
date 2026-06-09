from django.db import models
from accounts.models import User
from versatileimagefield.fields import VersatileImageField

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
    chailds = models.ForeignKey(
        "Category",
        on_delete=models.CASCADE,
        related_name="parent",
        verbose_name="والد",
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = "دسته"
        verbose_name_plural = "دسته ها"
        ordering = ["-id"]

    def __str__(self):
        return f"{self.title}"


class Order(models.Model):
    user = models.ForeignKey(
        User,
        related_name="orders",
        on_delete=models.PROTECT,
        db_index=True,
        verbose_name="سفارش دهنده",
    )
    product = models.ForeignKey(
        "Product",
        related_name="orders",
        on_delete=models.PROTECT,
        db_index=True,
        verbose_name="محصول",
    )
    SELECTED_CHOISE = [
        (1, "پرداخت شده"),
        (2, "در حال ارسال"),
        (3, "ارسال شده"),
        (4, "لغو شده"),
    ]
    status = models.SmallIntegerField(choices=SELECTED_CHOISE, db_index=True, default=1)
    create_at = models.DateTimeField(auto_now_add=True, db_index=True)
    total_price = models.IntegerField(verbose_name="کل قیمت")
    note = models.TextField(verbose_name="نکات سفارش")

    class Meta:
        verbose_name = "سفارش"
        verbose_name_plural = "سفارشات"
        ordering = [
            "-create_at",
        ]
        indexes = [
            models.Index(fields=["create_at", "status"]),
            models.Index(fields=["user", "status"]),
        ]
        constraints = [
            models.UniqueConstraint(
                fields=["user", "product"], name="unique_user_product_order"
            )
        ]

    def __str__(self):
        return f"سفارش: {self.id} - {self.user.first_name} {self.user.last_name}"


class Comment(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, verbose_name="کاربر", related_name="coments"
    )
    product = models.ForeignKey(
        "Product",
        on_delete=models.CASCADE,
        related_name="comments",
        verbose_name="محصول",
    )
    content = models.TextField(max_length=2000, verbose_name="متن کامنت")
    create_at = models.DateField(auto_now_add=True, verbose_name="تاریخ ایجاد")
    is_active = models.BooleanField(default=False, verbose_name="وضعیت کامنت")
    star = models.IntegerField(
        default=1, verbose_name="امتیاز خرید", blank=True, null=True
    )


class Product(models.Model):
    title = models.CharField(max_length=300, verbose_name="عنوان محصول")
    discription = models.TextField(max_length=2000, verbose_name="توضیحات")
    price = models.IntegerField(verbose_name="قیمیت محصول")
    stock = models.IntegerField(default=0, verbose_name="موجودی")
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="product"
    )
    seller = models.ForeignKey(
        User, on_delete=models.CASCADE, verbose_name="فروشنده", related_name="seller"
    )
    create_at = models.DateField(auto_now_add=True, verbose_name="تاریخ ایجاد")
    update_at = models.DateField(auto_now=True, verbose_name="تاریخ آخرین بروز رسانی")
    is_active = models.BooleanField(default=False, verbose_name="وضعیت محصول")
    slug = models.CharField(max_length=200, verbose_name="مسیر url محصول", unique=True)

    class Meta:
        verbose_name = "محصول"
        verbose_name_plural = "محصولات"
        ordering = ["-create_at"]

    def __str__(self):
        return f"{self.title} {self.seller}"


class ProductImage(models.Model):
    product = models.ForeignKey(
        "Product", on_delete=models.CASCADE, related_name="images"
    )
    image = VersatileImageField(upload_to="uploads/images/products/")
    alt_text = models.CharField(max_length=300, blank=True)
    sort_order = models.PositiveIntegerField(default=0)
    is_primary = models.BooleanField(default=False)

    class Meta:
        ordering = ["sort_order"]

    # def save(self, force_insert = ..., force_update = ..., using = ..., update_fields = ...):
    #     return super().save(force_insert, force_update, using, update_fields)
    def save(self, *args, **kwargs):
        if self.is_primary:
            ProductImage.objects.filter(product=self.product, is_primary=True).exclude(
                pk=self.pk
            ).update(is_primary=False)

        return super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.product.title}"
