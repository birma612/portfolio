from rest_framework import serializers
from .models import Project, Technology


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ["id", "name", "category"]


class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "short_description",
            "description",
            "technologies",
            "image_url",
            "github_url",
            "live_demo_url",
            "is_featured",
            "created_at",
            "updated_at",
        ]
