from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

User = get_user_model()


class PhoneBackend(ModelBackend):
    def authenticate(self, request, phone_number=..., password=..., **kwargs):
        try:
            user = User.objects.get(phone_number=phone_number)
        except User.DoesNotExist:
            return None
        if user.check_password(password):
            return user
        return None
