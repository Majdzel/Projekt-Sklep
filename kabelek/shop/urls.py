from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [

    path('list/', views.itemsList, name='itemList'),
    path('', views.shop, name='shop'),
    path('cart/', views.cart, name='cart'),
    path('ordering/', views.ordering, name='ordering'),

]