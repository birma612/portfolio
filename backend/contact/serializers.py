from rest_framework import serializers
from .models import ContactInquiry


class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = [
            "id",
            "name",
            "email",
            "subject",
            "message",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def validate_name(self, value):
        value = value.strip()

        if len(value) < 2:
            raise serializers.ValidationError(
                "Name must contain at least 2 characters."
            )

        return value

    def validate_subject(self, value):
        value = value.strip()

        if not value:
            raise serializers.ValidationError(
                "Subject cannot be empty."
            )

        return value

    def validate_message(self, value):
        value = value.strip()

        if len(value) < 10:
            raise serializers.ValidationError(
                "Message must contain at least 10 characters."
            )

        return value
