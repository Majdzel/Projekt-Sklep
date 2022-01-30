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
    path('update_item/', views.updateItem, name='update_item'),
    path('ordering/order_save/', views.ordering_post, name='ordering_post'),
    path('register/', views.SignUp.as_view(), name="register_custom"),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)