from django.shortcuts import render
from .models import Collections
# Create your views here.

def collections_view(request):
    list = Collections.objects.all()

    return render(request, 'collections.html', { 'list': list } )
