from PIL import Image
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.conf import settings
from ImageUpload.forms import *


# Create your views here.
def upload_form_view(request):
    if request.method == 'POST':
        form = UploadForm(request.POST, request.FILES)

        if form.is_valid():
            # form.save()
            myfile = request.FILES['ImageName']
            fs = FileSystemStorage()
            filename = fs.save(myfile.name, myfile)
            uploaded_file_url = fs.url(filename)

            im = Image.open(myfile)
            print('Image Size: ', im.size)

            print('************************************************************************************')
            print('Files: ', settings.MEDIA_ROOT, request.FILES['ImageName'])
            print('Uploaded: ', uploaded_file_url)
            print('************************************************************************************')
            return redirect('success')
    else:
        form = UploadForm()
    return render(request, 'orders_form_1.html', {'form': form})


def file_upload_view(request):
    if request.method == 'POST':
        myfile = request.FILES['file']
        fs = FileSystemStorage()
        filename = fs.save(myfile.name, myfile)
        uploaded_file_url = fs.url(filename)

        im = Image.open(myfile)

        request.session['file'] = uploaded_file_url
        request.session['w'] = im.size[0]
        request.session['h'] = im.size[1]

        print('\n\n\n\n************************************************************************************')
        print("File URL", uploaded_file_url)
        print("Image Width", im.size[0])
        print("Image Height", im.size[1])
        print ("Seesion File Name: ", request.session['file'])

        data = {
            "imgPath": uploaded_file_url,
            "imgName": myfile.name,
            "imgWidth": im.size[0],
            "imgHeight": im.size[1]
        }
    else:
        data = "Not Post"

    return JsonResponse(data)


def success(request):
    return HttpResponse('successfully uploaded')
