
from django.contrib import admin
from .models import Education, Experience, Profile, Skill, Project


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("full_name", "professional_title", "is_active")
    list_filter = ("is_active",)
    search_fields = ("full_name", "professional_title")


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "proficiency", "is_visible")
    list_filter = ("category", "is_visible")
    search_fields = ("name",)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "role", "organization", "start_date", "end_date", "is_visible"
    )
    list_filter = ("is_current", "is_visible")
    search_fields = ("role", "organization")


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ("qualification", "institution", "end_date", "is_visible")
    search_fields = ("qualification", "institution")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "is_featured",
        "is_visible",
        "display_order",
    )
    list_filter = ("is_featured", "is_visible")
    search_fields = ("title", "description", "technologies")
    list_editable = ("is_featured", "is_visible", "display_order")
