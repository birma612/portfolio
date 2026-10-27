from django.urls import path

from .views import (
    ProjectListAPIView,
    FeaturedProjectListAPIView,
    ProjectDetailAPIView,
)

urlpatterns = [
    path("", ProjectListAPIView.as_view(), name="project-list"),
    path("featured/", FeaturedProjectListAPIView.as_view(), name="featured-project-list"),
    path("<slug:slug>/", ProjectDetailAPIView.as_view(), name="project-detail"),
]
