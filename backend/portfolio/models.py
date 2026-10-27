
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Profile(models.Model):
    full_name = models.CharField(max_length=150)
    professional_title = models.CharField(max_length=200)
    short_bio = models.CharField(max_length=300)
    about = models.TextField(blank=True)

    email = models.EmailField(blank=True)
    location = models.CharField(max_length=150, blank=True)
    profile_image_url = models.URLField(blank=True)

    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    website_url = models.URLField(blank=True)

    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"

    def __str__(self):
        return self.full_name


class Skill(models.Model):
    class Category(models.TextChoices):
        PROGRAMMING = "programming", "Programming Languages"
        FRAMEWORK = "framework", "Frameworks"
        DATABASE = "database", "Databases"
        TOOLS = "tools", "Tools"
        OTHER = "other", "Other"

    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(
        max_length=20,
        choices=Category.choices,
        default=Category.OTHER,
    )
    proficiency = models.PositiveSmallIntegerField(
        null=True,
        blank=True,
        validators=[
            MinValueValidator(1),
            MaxValueValidator(100),
        ],
        help_text="Optional percentage from 1 to 100.",
    )
    display_order = models.PositiveIntegerField(default=0)
    is_visible = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return self.name


class Experience(models.Model):
    role = models.CharField(max_length=150)
    organization = models.CharField(max_length=200)
    location = models.CharField(max_length=150, blank=True)

    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)

    display_order = models.PositiveIntegerField(default=0)
    is_visible = models.BooleanField(default=True)

    class Meta:
        ordering = ["-start_date", "display_order"]

    def __str__(self):
        return f"{self.role} at {self.organization}"


class Education(models.Model):
    qualification = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=150, blank=True)

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(blank=True)

    display_order = models.PositiveIntegerField(default=0)
    is_visible = models.BooleanField(default=True)

    class Meta:
        ordering = ["-end_date", "display_order"]

    def __str__(self):
        return f"{self.qualification} - {self.institution}"



class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    technologies = models.CharField(
        max_length=500,
        blank=True,
        help_text="Enter technologies separated by commas, e.g. Django, Python, MySQL",
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)

    is_featured = models.BooleanField(default=False)
    is_visible = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["display_order", "title"]

    def __str__(self):
        return self.title
