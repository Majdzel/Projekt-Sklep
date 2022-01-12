from django.shortcuts import render
from .models import items

def itemsList(request):

    allItems = items.objects.all()


    context = {'allItems': allItems}

    return render(request, 'shop/itemsList.html', context)
# Create your views here.
