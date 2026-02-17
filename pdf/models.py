from django.db import models
from django.utils import timezone


class FilePdf(models.Model):
    # file_name = models.CharField(max_length=255)
    title = models.TextField()
    cover = models.ImageField(upload_to='images/')

    # pdf = models.ImageField(upload_to='pdf_files/')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

# Create your models here.


class BuiltInPdf(models.Model):
    title = models.TextField()
    file = models.FileField(upload_to='pdf_files/')

    def __str__(self):
        return self.title


class OnlyPdf(models.Model):
    title = models.TextField()
    file = models.FileField(upload_to='pdf_files/')
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
