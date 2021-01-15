from django.contrib.auth.tokens import default_token_generator
from django.core.validators import EmailValidator, ValidationError
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import MailingList, Distribution, TestDistribution, TestMailingList
from django.core.mail import EmailMessage
from django.template.loader import get_template
import base64
from datetime import datetime

#################################################
#
# Admin Views -
#
##################################################
#
# Newsletter Bulk Email
#
def sendNewsletter_view(request):
    action = request.GET.get('action', '')
    data  = { 'action': action }

    list = MailingList.objects.all()
    for item in list:
        template = get_template('email_black_friday.html')
        print ('Email to: ' + str(item.Email) + ' id: ' + str(item.id))
        SendMessage(template, 'Welcome to Black Friday', item.Email, data)
        Distribution.objects.create(
            Newsletter = "Black Friday",
            Subject = "The Canvas Print Studio - Welcome to Black Friday",
            MailingID_id = item.id,
        )

    return render(request, 'mailing_import.html')


def subscribe_confirmation(request):
    email_base64 = request.GET.get('token','')

    try:
        match = MailingList.objects.get(Token=email_base64)

    except MailingList.DoesNotExist:
        alert = "alert alert-error"
        title = "Oops there was an error"
        message = "You may have arrived here by accident? please subscribe below."

    else:
        #Decode Message
        base64_bytes = email_base64.encode('ascii')
        message_bytes = base64.b64decode(base64_bytes)
        email = message_bytes.decode('ascii')

        try:
            match = MailingList.objects.get(Email=email)

        except MailingList.DoesNotExist:
            alert = "alert alert-error"
            title = "Oops there was an error"
            message = "Your email address doesn't exist, please subscribe below."

        else:
            match.Active = 1
            match.Token = 'Confirmed - ' + str(datetime.now())
            match.save()

            alert = "alert alert-success"
            title = "Welcome to the Canvas print Studio"
            message = "You have confirmed your email address."

    ctx = {
        'alert': alert,
        'title': title,
        'message': message
    }
    return render(request, 'subscribe.html', ctx)


def subscribe(request):
    if request.POST['action'] == 'POST':
        email = request.POST['email']

        validator = EmailValidator()

        try:
            validator(email)

        except ValidationError:

            data = {
                'status': 'warning',
                'title': 'Error in Email Address',
                'msg': 'Please enter a correct Email Address!'
            }

        else:
            # Check if email already exists
            try:
                match = MailingList.objects.get(Email=email)

            except MailingList.DoesNotExist:
                #Unable to find user
                # Encode Message
                bytes = email.encode('ascii')
                base64_bytes = base64.b64encode(bytes)
                enc = base64_bytes.decode('ascii')

                #Save to DB
                MailingList.objects.create(
                    Email=email,
                    SessionID=request.session.session_key,
                    Token=enc
                )

                data = {
                    'status': 'success',
                    'title': 'You have Subscribed',
                    'msg': 'Welcome to the Canvas Print Studio Newsletter!'
                }

                # Order summary email
                url = 'http://localhost:8000/subscribe_confirmation/?token=' + str(enc)
                ctx = {
                    'confirm': url
                }
                template = get_template('subscribe_confirmation.html')
                SendMessage(template, 'Email Subscription Confirmatiom', email, ctx, True)

            else:
                data = {
                    'status': 'warning',
                    'title': 'You have Already Subscribed',
                    'msg': 'This email has already been registered!'
                }

    else:
        data = {
            'status': 'warning',
            'title': 'An Error has Occurred',
            'msg': 'We were unable to register you to our Newsletter!'
        }

    return JsonResponse(data)

def SendMessage(template, Subject, ToEmail, ctx, design=False):
    content = template.render(ctx)
    if design:
        msg = EmailMessage(Subject, content, 'design@thecanvasprintstudio.co.uk', to=[ToEmail, 'design@thecanvasprintstudio.co.uk' ])
    else:
        msg = EmailMessage(Subject, content, 'design@thecanvasprintstudio.co.uk', to=[ToEmail])

    msg.content_subtype = 'html'
    msg.send()