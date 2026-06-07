from rest_framework.views import exception_handler
from rest_framework.exceptions import ValidationError


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is None:
        return response

    # Validation Errors
    if isinstance(exc, ValidationError):
        response.data = {
            "success": False,
            "code": "VALIDATION_ERROR",
            "message": "Validation failed",
            "errors": response.data,
        }

        return response

    response.data = {
        "success": False,
        "status_code": response.status_code,
        "code": getattr(exc, "default_code", "UNKNOWN_ERROR"),
        "message": (str(exc.detail) if hasattr(exc, "detail") else "Request failed"),
    }

    return response
