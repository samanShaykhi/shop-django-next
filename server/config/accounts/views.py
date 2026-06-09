from django.shortcuts import render
from django.contrib.auth import authenticate
from .models import User
from rest_framework import viewsets
from .serializers import AccountSeri, RegisterUser, EditeProfile
from .pagination import AccountPagination

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken


# Create your views here.
class AccountViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AccountSeri
    pagination_class = AccountPagination


class RegeisterView(APIView):
    def post(self, req):
        serializer = RegisterUser(data=req.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data["phone_number"]
        user = User.objects.filter(phone_number=phone_number).exists()

        user, created = User.objects.get_or_create(phone_number=phone_number)

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        response = Response(
            {
                "user": {
                    "id": user.id,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "email": user.email,
                    "phone_number": user.phone_number,
                },
                "token": access_token,
            },
            status=status.HTTP_201_CREATED,
        )
        response.set_cookie(
            key="refresh_token",
            value=refresh,
            httponly=True,
            secure=True,
            samesite="Lax",
            max_age=7 * 24 * 60 * 60,
        )
        return response


class LoginView(APIView):
    def post(self, req):
        phone_number = req.data.get("phone_number")
        password = req.data.get("password")
        user = authenticate(phone_number=phone_number, password=password)
        if not user:
            return Response(
                {"error": "رمز عبور یا شماره اشتباه است"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        response = Response(
            {
                "user": {
                    "id": user.id,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "email": user.email,
                    "phone_number": user.phone_number,
                },
                "token": access_token,
            },
            status=status.HTTP_201_CREATED,
        )
        response.set_cookie(
            key="refresh_token",
            value=str(refresh),
            httponly=True,
            secure=True,
            samesite="Lax",
            max_age=7 * 24 * 60 * 60,
        )
        return response


class RefeshTokenView(APIView):
    def post(self, req):
        refresh_token = req.COOKIES.get("refresh_token")
        if not refresh_token:
            return Response({"error": "no token"}, status=status.HTTP_401_UNAUTHORIZED)
        try:
            refresh = RefreshToken(refresh_token)
            user_id = refresh["user_id"]
            user = User.objects.get(id=user_id)
            print(user)
            return Response(
                {
                    "token": str(refresh.access_token),
                    "user": AccountSeri(user).data,
                }
            )
        except Exception:
            return Response(
                {"error": "Invalid token"}, status=status.HTTP_401_UNAUTHORIZED
            )


class LogoutVeiw(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, req):
        refresh_token = req.COOKIES.get("refresh_token")
        if refresh_token:
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception:
                pass

        response = Response({"message": "logout success"})

        response.delete_cookie("refresh_token")

        return response


class EditProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def patch(self, request):
        serializer = EditeProfile(
            instance=request.user, data=request.data, partial=True
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
