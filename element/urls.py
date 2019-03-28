from django.urls import path
from . import views

urlpatterns = [
    path('',                    views.elements_index,           name='elements-index'),
    path('explore',             views.explore,                  name='explore'),
    path('science',             views.science,                  name='science'),
    path('fire',                views.fire,                     name='fire'),
    path('water',               views.water,                    name='water'),
    path('earth',               views.earth,                    name='earth'),
    path('wind',                views.wind,                     name='wind'),
]
