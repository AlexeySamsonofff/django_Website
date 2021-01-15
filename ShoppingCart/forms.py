from django import forms

PRODUCT_QUANTITY_CHOICES = [(i, str(i)) for i in range(1, 21)]
PROOF_CHOICES = [('0', 'No'), ('1', 'yes')]

class CartAddProductForm(forms.Form):
    quantity = forms.TypedChoiceField(label = '', choices=PRODUCT_QUANTITY_CHOICES, coerce=int, widget=forms.Select(attrs={'class': 'form-control'}))
    update = forms.BooleanField(required=False, initial=False, widget=forms.HiddenInput)
    canvasImg = forms.CharField(label='', widget=forms.HiddenInput)
    canvasCost = forms.CharField(label='', widget=forms.HiddenInput)
    canvasWidth = forms.CharField(label='', widget=forms.HiddenInput)
    canvasHeight = forms.CharField(label='', widget=forms.HiddenInput)
    canvasWrap = forms.CharField(label='', initial='Photo', widget=forms.HiddenInput)
    canvasMaterial = forms.CharField(label='', initial='Standard', widget=forms.HiddenInput)
    canvasNotes = forms.CharField(label='', required=False, widget=forms.Textarea(attrs={'class': 'sm-form-control', 'rows': '3'}))
    canvasProof = forms.TypedChoiceField(label='', choices=PROOF_CHOICES, widget=forms.Select(attrs={'class': 'form-control', 'id': 'cmbProof'}))

    #<input type="input" value="" id="Cost" />
    #<input type="input" value="{{ canvasWidth }}" id="canvasWidth">
    #<input type="input" value="{{ canvasHeight }}" id="canvasHeight">
    #<input type="input" value="Photo" id="canvasWrap">
    #<input type="input" value="Standard" id="canvasMaterial">

class CartQuantities(forms.Form):
    quantity = forms.CharField(label='', widget=forms.TextInput(attrs={'class': 'qty'}))



#, widget=forms.HiddenInput