from django import forms
from django.core import validators

class SignUp(forms.Form):
    FirstName = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'First Name', 'class': 'form-control'}), required=True, )
    LastName = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Last Name', 'class': 'form-control'}), required=True, )
    Email = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Email', 'class': 'form-control'}), required=True, )
    Street = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'No/Street', 'class': 'form-control'}), required=True, )
    Area = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Area', 'class': 'form-control'}), required=True, )
    City = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'City', 'class': 'form-control'}), required=True, )
    PostCode = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Post Code', 'class': 'form-control'}), required=True, )
    Telephone = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Telephone', 'class': 'form-control'}), required=True, )
    Password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'class': 'form-control'}), required=True, validators = [validators.MinLengthValidator(8)] )
    ReEnter = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Re-enter', 'class': 'form-control'}), required=True, )

class Login(forms.Form):
    Email = forms.CharField(widget=forms.TextInput(attrs={'placeholder': 'Email', 'class': 'form-control'}), required=True, )
    Password = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': 'Password', 'class': 'form-control'}), required=True,)

    # Custom Validator


