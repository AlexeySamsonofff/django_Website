from django.shortcuts import render
from . import forms

# Create your views here.

def regform(request):
    form = forms.SignUp()
    if request.method == "POST":
        form = forms.SignUp(request.POST)
        if form.is_valid():
            html = html + "The form is valid"
    else:
        html = 'welcome for the first time'
    return render(request, 'signup.html', {'html': html, 'form': form})
