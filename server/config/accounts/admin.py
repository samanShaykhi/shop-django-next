from django.contrib import admin
from . import models
# Register your models here.
@admin.register(models.User)
class User_Admin(admin.ModelAdmin):
    list_display=("username","phone_number","is_staff")