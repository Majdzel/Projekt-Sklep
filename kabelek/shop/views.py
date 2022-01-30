from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.core.mail import send_mail
from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers

import json

from django.urls import reverse_lazy
from django.views.generic import CreateView

from .models import *


def itemsList(request):

    allItems = items.objects.all()
    context = {'allItems': allItems}

    return render(request, 'shop/itemsList.html', context)


def shop(request):
    allItems = items.objects.all()

    serializers.serialize('json', allItems);
    context = {'allItems': allItems}
    return render(request, 'shop/shop.html', context)


def cart(request):
    return render(request, 'shop/cart.html')


@login_required(login_url='/login')
def ordering(request):
    return render(request, 'shop/checkout.html')

@login_required(login_url='/login')
def ordering_post(request):
    if request.POST:
        send_mail(
            'Zamówienie',
            'Zawartość zamówienia:',
            'from@example.com',
            ['michal.jar@outlook.com'],
            fail_silently=False,
        )
    return render(request, 'shop/order_finished.html')


def updateItem(request):
    return JsonResponse('Przedmiot zostal dodany', safe=False)


class SignUp(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/register.html"