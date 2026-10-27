from django.urls import path
from .views import ContactInquiryCreateAPIView

urlpatterns = [
    path("", ContactInquiryCreateAPIView.as_view(), name="contact-create"),
]
