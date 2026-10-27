
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Education, Experience, Profile, Skill
from .serializers import EducationSerializer, ExperienceSerializer, ProfileSerializer, SkillSerializer


class ProfileAPIView(generics.GenericAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [AllowAny]
    queryset = Profile.objects.filter(is_active=True)

    def get(self, request, *args, **kwargs):
        profile = self.get_queryset().first()

        if profile is None:
            from rest_framework.exceptions import NotFound
            raise NotFound("No active profile has been configured.")

        serializer = self.get_serializer(profile)
        return self.get_response(serializer.data)

    def get_response(self, data):
        from rest_framework.response import Response
        return Response(data)



class SkillListAPIView(generics.ListAPIView):
    serializer_class = SkillSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Skill.objects.filter(
            is_visible=True
        ).order_by("display_order", "name")
    
    

class ExperienceListAPIView(generics.ListAPIView):
    serializer_class = ExperienceSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Experience.objects.filter(
            is_visible=True
        ).order_by("-start_date", "display_order")

    

class EducationListAPIView(generics.ListAPIView):
    serializer_class = EducationSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Education.objects.filter(
            is_visible=True
        ).order_by("-end_date", "display_order")
    