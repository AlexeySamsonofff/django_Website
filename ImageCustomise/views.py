from PIL import Image
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render, redirect
from SizesAndPrices.models import SizesAndStock
from ShoppingCart.forms import CartAddProductForm
import os
from CanvasStudioWebsite.settings import IMGP_URL

# Create your views here.
def prices(request, img_name, canvas_width, canvas_height):
    print('***********************************************')
    print('File: ', request.session['file'])
    print('Image Width: ', request.session['w'])
    print('Image Height: ', request.session['h'])
    print('Image File Name: ', img_name)
    print('Canvas Width: ', canvas_width)
    print('Canvas Height: ', canvas_height)
    print('***********************************************')

    form = CartAddProductForm()
    queryset = SizesAndStock.objects.all()
    context = {
        'queryset': queryset,
        'file': request.session['file'],
        'imgName': img_name,
        'imageWidth': request.session['w'],
        'imageHeight': request.session['h'],
        'canvasWidth': canvas_width,
        'canvasHeight': canvas_height,
        'form': form
    }
    return render(request, "orders_form_2.html", context)


def rotateL_view(request):
    if request.method == 'POST':
        purl = request.session['file']
        pic = purl.split("/")
        IMAGE_URL = os.path.join(IMGP_URL, pic[2])
        im = Image.open(IMAGE_URL)
        imgrotateL = im.rotate(90, expand=True)
        imgrotateL.save(IMAGE_URL)

    return HttpResponse(purl)


def rotateR_view(request):
    if request.method == 'POST':
        purl = request.session['file']
        pic = purl.split("/")
        IMAGE_URL = os.path.join(IMGP_URL, pic[2])
        im = Image.open(IMAGE_URL)
        imgrotateR = im.rotate(-90, expand=True)
        imgrotateR.save(IMAGE_URL)

    return HttpResponse(purl)


def flip_view(request):
    if request.method == 'POST':
        purl = request.session['file']
        pic = purl.split("/")
        IMAGE_URL = os.path.join(IMGP_URL, pic[2])
        im = Image.open(IMAGE_URL)
        imgflip = im.transpose(Image.FLIP_LEFT_RIGHT)
        imgflip.save(IMAGE_URL)

    return HttpResponse(purl)


def imgsrc_view(request):
    if request.method == 'POST':
        purl = request.session['file']

    return HttpResponse(purl)


def success(request):
    return HttpResponse('successfully uploaded')
