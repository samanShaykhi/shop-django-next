from rest_framework.pagination import PageNumberPagination


class AccountPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = "accunt_size"
    max_page_size = 100
