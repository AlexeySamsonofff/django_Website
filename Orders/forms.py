from django import forms
from .models import DeliveryDetails, PaymentDetails

class OrderPaymentForm(forms.ModelForm):
    class Meta:
        model = PaymentDetails
        fields = ['FirstName', 'LastName', 'House', 'Street', 'Area', 'Town', 'PostCode', 'Telephone', 'Email', 'OrderNo']
        widgets = {
            'FirstName': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-0',
                    'form': 'payment'
                }
            ),
            'LastName': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-1',
                    'form': 'payment'
                }
            ),
            'House': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-2',
                    'form': 'payment'
                }
            ),
            'Street': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-3',
                    'form': 'payment'
                }
            ),
            'Area': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-4',
                    'form': 'payment'
                }
            ),
            'Town': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-5',
                    'form': 'payment'
                }
            ),
            'PostCode': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-6',
                    'form': 'payment'
                }
            ),
            'Telephone': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'p-7',
                    'form': 'payment'
                }
            ),
            'Email': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'form': 'payment'
                }
            ),
            'OrderNo': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'type': 'hidden',
                    'id': 'pOrderNo'
                }
            ),
        }

class OrderDeliveryForm(forms.ModelForm):
    class Meta:
        model = DeliveryDetails
        fields = ['FirstName', 'LastName', 'House', 'Street', 'Area', 'Town', 'PostCode', 'Telephone', 'OrderNo']
        widgets = {
            'FirstName': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'id': 'd-0',
                    'required': False
                }
            ),
            'LastName': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-1'
                }
            ),
            'House': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-2'
                }
            ),
            'Street': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-3'
                }
            ),
            'Area': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-4'

                }
            ),
            'Town': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-5'
                }
            ),
            'PostCode': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-6'
                }
            ),
            'Telephone': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'required': False,
                    'id': 'd-7'
                }
            ),
            'OrderNo': forms.TextInput(
                attrs={
                    'class': 'sm-form-control',
                    'type': 'hidden',
                    'id': 'dOrderNo'
                }
            ),
        }