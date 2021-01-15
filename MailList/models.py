from django.db import models
from datetime import date, time
from django.db.models import CASCADE

class MailingList(models.Model):
    SessionID = models.CharField(max_length=50)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    Email = models.CharField(max_length=400)
    Active = models.BooleanField(default=False)
    Token = models.CharField(max_length=400, null=True)

    def __str__(self):
        return  'Email: ' + self.Email + ' Joined: ' + str(self.Date) + ' Subscribed: ' + str(self.Active)


class Distribution(models.Model):
    MailingID = models.ForeignKey(MailingList, related_name='MailingList', on_delete=CASCADE)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    Newsletter = models.CharField(max_length=400)
    Subject = models.CharField(max_length=400)

class TestMailingList(models.Model):
    SessionID = models.CharField(max_length=50)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    Email = models.CharField(max_length=400)
    Active = models.BooleanField(default=False)
    Token = models.CharField(max_length=400, null=True)

    def __str__(self):
        return  'Email: ' + self.Email + ' Joined: ' + str(self.Date) + ' Subscribed: ' + str(self.Active)

class TestDistribution(models.Model):
    MailingID = models.ForeignKey(TestMailingList, related_name='MailingList', on_delete=CASCADE)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    Newsletter = models.CharField(max_length=400)
    Subject = models.CharField(max_length=400)