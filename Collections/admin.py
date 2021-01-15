from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import *

@admin.register(Collections, CollectionCategory)
class PersonAdmin(ImportExportModelAdmin):
    pass
