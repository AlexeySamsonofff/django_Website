from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from .models import *

@admin.register(MailingList, TestMailingList)
class PersonAdmin(ImportExportModelAdmin):
    pass

