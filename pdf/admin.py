from django.contrib import admin

from .models import FilePdf, OnlyPdf, BuiltInPdf

admin.site.register(FilePdf)
admin.site.register(OnlyPdf)
admin.site.register(BuiltInPdf)
# Register your models here.
