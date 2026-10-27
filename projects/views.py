from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Project
from .serializers import ProjectSerializer


class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Project.objects.filter(
            is_published=True
        ).prefetch_related(
            "technologies"
        ).order_by(
            "-is_featured", "display_order", "-created_at"
        )


class FeaturedProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Project.objects.filter(
            is_published=True,
            is_featured=True,
        ).prefetch_related(
            "technologies"
        ).order_by(
            "display_order", "-created_at"
        )


class ProjectDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    lookup_field = "slug"

    def get_queryset(self):
        return Project.objects.filter(
            is_published=True
        ).prefetch_related("technologies")
