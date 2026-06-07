from rest_framework.exceptions import APIException


class ItemNotFound(APIException):
    status_code = 404
    default_detail = "Item not found"
    default_code = "ITEM_NOT_FOUND"
