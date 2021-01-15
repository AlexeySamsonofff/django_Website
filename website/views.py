from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.

def home(request):
    return render(request, "home.html")

def canvasprints(request):
    return render(request, "canvasprints.html")

def canvasquality(request):
    return render(request, "canvasquality.html")

def trade(request):
    return render(request, "trade.html")

