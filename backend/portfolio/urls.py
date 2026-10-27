
from django.urls import path

from .views import EducationListAPIView, ExperienceListAPIView, ProfileAPIView, SkillListAPIView

app_name = "portfolio"

urlpatterns = [    
    path("profile/", ProfileAPIView.as_view(), name="profile"),
    path("skills/", SkillListAPIView.as_view(), name="skills"),
      path(
        "experience/",
        ExperienceListAPIView.as_view(),
        name="experience",
    ),
    path("education/", EducationListAPIView.as_view(), name="education"),
]
