from django.shortcuts import render

# Create your views here.
def SocialMedia_view(request):
    return render(request, 'social_media.html')