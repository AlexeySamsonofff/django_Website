from django.shortcuts import render
from FAQ.models import FAQCategories, FAQQuestions
from django.db.models import OuterRef, Subquery, expressions

# Create your views here.

def GetCategories(request):
    c = FAQCategories.objects.all().order_by('id')
    q = FAQQuestions.objects.all().order_by('Category_id')
    context = {"cat": c, "faq": q}

    return render(request, "faq.html", context)

    def __str__(self):
        return self.Category + self.Question + self.Answer


# select q.*, c.* FROM questions as q INNER JOIN categories as c WHERE q.category = c.category