from django.shortcuts import render
from TermsandConditions.models import TandC
from django.db.models import OuterRef, Subquery, expressions

# Create your views here.

def TandC_view(request):
    c = TandC.objects.all()
    context = {"tandc": c}

    return render(request, "t&c.html", context)

    def __str__(self):
        return self.Category + self.Header + self.Detail

    num2words = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', \
             6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', \
            11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', \
            15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', \
            19: 'Nineteen', 20: 'Twenty', 30: 'Thirty', 40: 'Forty', \
            50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty', \
            90: 'Ninety', 0: 'Zero'}

    def getNumber(n):
        return num2words[n]
