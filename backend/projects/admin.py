
from django.contrib import admin

from .models import Project, Technology


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ("name", "category")
    search_fields = ("name", "category")


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title", "is_featured", "is_published", "display_order"
    )
    list_filter = ("is_featured", "is_published")
    search_fields = ("title", "short_description")
    filter_horizontal = ("technologies",)
    prepopulated_fields = {"slug": ("title",)}
