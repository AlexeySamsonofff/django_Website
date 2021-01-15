from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from Contact.models import Contact
from Contact.forms import ContactForm
from django.core.mail import EmailMessage
from django.template import Context
from django.template.loader import get_template

# Create your views here.
def ContactForm_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            # send email and save to DB
            Contact.objects.create(
                Name=cd['Name'],
                Email=cd['Email'],
                Phone=cd['Phone'],
                Subject=cd['Subject'],
                Message=cd['Message'],
            )

            ## Send Email to the customer
            message = "Dear " + cd['Name'] + "<br /><br />"
            message = message + "Please allow up to 12 hours for us to get make to you regarding your query."
            template = get_template('email_message.html')
            ctx = {
                'title': "Thank you",
                'subtitle': "Your Message has been received",
                'message': message
            }

            content = template.render(ctx)
            msg = EmailMessage(cd['Subject'], content, 'design@thecanvasprintstudio.co.uk', to = [cd['Email'], ])
            msg.content_subtype = 'html'
            msg.send()

            ## Send Email to the Design@thecanvas....
            message = "A message from " + cd['Name'] + "%s \n"
            message = message + "Telephone: " + cd['Phone'] + "%0A"
            message = message + "Email: " + cd['Email'] + "%0A"
            message = message + cd['Message']
            template = get_template('email_message.html')
            ctx = {
                'title': "An Email Enquiry has been made",
                'message': message
            }

            SendMessage(template, cd, ctx)

            #return render(request, 'contact.html', { 'status': True, })
    else:
        form = ContactForm()

    return render(request, 'contact.html', { 'form': form, })

def SendMessage(template, cd, ctx):
    content = template.render(ctx)
    msg = EmailMessage(cd['Subject'], content, 'design@thecanvasprintstudio.co.uk', to=['design@thecanvasprintstudio.co.uk', ])
    msg.content_subtype = 'html'
    msg.send()