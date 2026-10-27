from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.throttling import AnonRateThrottle

from .models import ContactInquiry
from .serializers import ContactInquirySerializer


class ContactInquiryThrottle(AnonRateThrottle):
    scope = "contact"


class ContactInquiryCreateAPIView(generics.CreateAPIView):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer
    permission_classes = [AllowAny]
    throttle_classes = [ContactInquiryThrottle]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.data = {
            "success": True,
            "message": "Your message has been submitted successfully.",
            "inquiry_id": response.data["id"],
        }
        return response
