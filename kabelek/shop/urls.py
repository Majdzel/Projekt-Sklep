from django.contrib import admin
from django.urls import path

from . import views

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [

    path('list/', views.itemsList, name='itemList'),
    path('', views.shop, name='shop'),
    path('cart/', views.cart, name='cart'),
    path('ordering/', views.ordering, name='ordering'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)