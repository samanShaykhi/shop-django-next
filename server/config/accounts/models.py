from django.contrib.auth.models import AbstractUser
from django.db import models
from versatileimagefield.fields import VersatileImageField


# Create your models here.
class User(AbstractUser):
    username = None
    email = None
    fullname = models.CharField(max_length=40, verbose_name="نام کمل")
    profile_image = VersatileImageField(
        upload_to="static/images/products/", blank=True, null=True
    )
    
    phone_number = models.CharField(
        max_length=11, verbose_name="شماره تلفن", unique=True
    )
    adres = models.TextField(max_length=300, verbose_name="آدرس کاربر", null=True)
    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []

    def __str__(self):
        return f"{self.username}"
