from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from datetime import datetime
from django.conf import settings

# Create your views here.
from SizesAndPrices.models import SizesAndStock


def prices(request):
    queryset = SizesAndStock.objects.all()
    context = { "queryset": queryset }
    return render(request, "prices.html", context)

    def __int__(self):
        return self.Inch + self.CM

#***********************************************************************************
#
# This is the price calculation - requries Width and Height to return JSON Standard
# and Premium costs for given height
#
#***********************************************************************************
def getCmbDimensions_view(request):
    data = ''
    queryset = SizesAndStock.objects.all()
    if (request.GET.get('Metric') == 'Inch'):
        for size in queryset:
            data = str('<option>' + size.Inch + '</option>')
    return JsonResponse({ 'data': data })


#***********************************************************************************
#
# This is the price calculation - requries Width and Height to return JSON Standard
# and Premium costs for given height
#
#***********************************************************************************
def getPrices_view(request):
    width = int(request.GET.get('w', None))
    height = int(request.GET.get('h', None))

    area = int(width * height)

    standard = 1.635 * pow(area, 0.591)
    standard += standard * 20 / 100

    xBarOffSet = 0
    if (width >= 40 or height >= 40): xBarOffSet = 18
    if (width >= 60 or height >= 60): xBarOffSet += 15
    if (width >= 72 or height >= 72): xBarOffSet += 20

    standard += standard * xBarOffSet / 100

    premium = standard + standard * 40 / 100

    data = {
        'Standard': round(standard),
        'Premium': round(premium)
    }

    return JsonResponse(data)