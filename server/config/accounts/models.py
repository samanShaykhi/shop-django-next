from django.contrib.auth.models import AbstractUser
from django.db import models
from versatileimagefield.fields import VersatileImageField
from django.contrib.auth.base_user import BaseUserManager

# Create your models here.
class Address(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, related_name="addresses")
    receiver_name = models.CharField(
        max_length=100, verbose_name="نام و نام خانوادگی تحویل گیرنده"
    )
    province_city = models.CharField(max_length=100, verbose_name="استان و شهر")
    address = models.CharField(max_length=1000, verbose_name="آدرس")
    address_details = models.CharField(max_length=500, verbose_name="جزئیات آدرس")
    postal_code = models.CharField(max_length=500, verbose_name="کد پستی")
    receiver_phone = models.CharField(max_length=11, verbose_name="موبایل تحویل گیرنده")

    def __str__(self):
        return f"{self.receiver_name} {self.province_city}"


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, phone_number, password=None, **extra_fields):
        if not phone_number:
            raise ValueError("Phone number is required")

        user = self.model(phone_number=phone_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        return self.create_user(phone_number, password, **extra_fields)


class User(AbstractUser):
    username = models.CharField(unique=True, null=True, blank=True)
    email = models.EmailField(unique=True, null=True, blank=True)
    fullname = models.CharField(max_length=40, verbose_name="نام کمل")
    profile_image = VersatileImageField(
        upload_to="uploads/images/profile/", blank=True, null=True
    )

    phone_number = models.CharField(
        max_length=11, verbose_name="شماره تلفن", unique=True
    )
    # adres = models.f(max_length=300, verbose_name="آدرس کاربر", null=True)
    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []
    objects = CustomUserManager()

    def __str__(self):
        return f"{self.phone_number} {self.username}"
