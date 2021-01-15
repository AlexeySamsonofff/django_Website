from django import forms

class UploadForm(forms.Form):
    ImageName = forms.ImageField()