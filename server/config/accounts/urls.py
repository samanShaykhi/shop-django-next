from django.urls import path, include

from .views import (
    AccountViewset,
    RegeisterView,
    LoginView,
    RefeshTokenView,
    LogoutVeiw,
    EditProfileView,
    Address_Change_View,
)

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"", AccountViewset)

urlpatterns = [
    path("", include(router.urls)),
    path("register", RegeisterView.as_view(), name="register"),
    path("login", LoginView.as_view(), name="login"),
    path("refresh", RefeshTokenView.as_view()),
    path("logout", LogoutVeiw.as_view()),
    path("edit-profile", EditProfileView.as_view()),
    path("address-changes", Address_Change_View.as_view()),
]
