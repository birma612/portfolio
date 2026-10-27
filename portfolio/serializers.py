
from rest_framework import serializers

from .models import Education, Experience, Profile, Skill, Project



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "full_name",
            "professional_title",
            "short_bio",
            "about",
            "email",
            "location",
            "profile_image_url",
            "github_url",
            "linkedin_url",
            "website_url",
        ]


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = [
            "name",
            "category",
            ""
            "proficiency",
        ]
    
    

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = [
            "role",
            "organization",
            "location",
            "description",
            "start_date",
            "end_date",
            "is_current",
        ]
    
    

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = [
            "qualification",
            "institution",
            "field_of_study",
            "start_date",
            "end_date",
            "description",
        ]
    
    

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "technologies",
            "github_url",
            "live_url",
            "image_url",
            "is_featured",
        ]
