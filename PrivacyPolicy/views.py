from django.shortcuts import render
from PrivacyPolicy.models import PrivacyPolicy
from django.db.models import OuterRef, Subquery, expressions

# Create your views here.

def PrivacyPolicy_view(request):
    c = PrivacyPolicy.objects.all()
    context = {"pp": c}

    return render(request, "privacy.html", context)

    def __str__(self):
        return self.Category + self.Header + self.Detail