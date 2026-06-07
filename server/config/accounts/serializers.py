from rest_framework import serializers
from .models import User
from rest_framework.validators import UniqueValidator


class AccountSeri(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "fullname",
            "profile_image",
            "phone_number",
            "adres",
        )


class RegisterUser(serializers.ModelSerializer):
    phone_number = serializers.CharField(max_length=11, min_length=11)

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "phone_number",
            "first_name",
            "last_name",
        )
        extra_kwargs = {
            "first_name": {"required": False},
            "last_name": {"required": False},
        }


def validation_image_profile(file):
    ALLOWED_FORMATS = {"JPEG", "PNG", "WEBP"}
    MAX_FILE_SIZE = 4 * 1024 * 1024
    MAX_WIDTH = 6000
    MAX_HEIGHT = 6000

    if file.size > MAX_FILE_SIZE:
        raise serializers.ValidationError("تصاویر نباید از 4 مگابایت بیشتر باشد.")
    try:
        img = Image.open(file)
        if img.format not in ALLOWED_FORMATS:
            raise serializers.ValidationError(
                "فرمت تصویر باید jpeg یا png یا webp باشد."
            )
        width, height = img.size
        if width > MAX_WIDTH:
            raise serializers.ValidationError("عرض تصویر بیش از حد مجاز است.")

        if height > MAX_HEIGHT:
            raise serializers.ValidationError("ارتفاع تصویر بیش از حد مجاز است.")
        img.verify()

    except serializers.ValidationError:
        raise
    except Exception:
        raise serializers.ValidationError("تصویر نامعتبر است.")

    file.seek(0)

    return file


class EditeProfile(serializers.ModelSerializer):
    username = serializers.CharField(max_length=30, min_length=4, required=False)
    fullname = serializers.CharField(max_length=30, min_length=4, required=False)
    email = serializers.EmailField(required=False)
    profile_image = serializers.ImageField(required=False, allow_empty_file=False)

    def validate_profile_image(self, profile_image):
        validation_image_profile(profile_image)
        return profile_image

    def validate_username(self, value):
        user = self.instance

        if User.objects.filter(username=value).exclude(pk=user.pk).exists():
            raise serializers.ValidationError("این نام کاربری قبلاً استفاده شده است.")

        return value

    def validate_email(self, value):
        user = self.instance
        if User.objects.filter(email=value).exclude(pk=user.pk).exists():
            raise serializers.ValidationError("این ایمیل قبلاً استفاده شده است.")

        return value

    class Meta:
        model = User
        fields = ("username", "fullname", "email", "profile_image")
