from django import forms
from django.core import validators
from Contact.models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['Name', 'Email', 'Phone', 'Subject', 'Message']
        widgets = {
            'Name': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'placeholder': 'Enter your Name',
                    'id': '0',
                }
            ),
            'Email': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'placeholder': 'Enter your Email',
                    'id': '1',
                }
            ),
            'Phone': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'placeholder': 'Enter your Tel No',
                    'id': '2',
                }
            ),
            'Subject': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'placeholder': 'Add a Subject Matter',
                    'id': '3',
                }
            ),
            'Message': forms.Textarea(
                attrs={
                    'class': 'sm-form-control',
                    'placeholder': 'What would you like to tell us?',
                    'id': '4',
                }
            ),
        }
