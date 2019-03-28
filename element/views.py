from django.shortcuts import render

# Create your views here.


def elements_index(request):
    return render(request, 'elements-index.html')


def explore(request):
    return render(request, 'explore.html')


def fire(request):
    return render(request, 'fire.html')


def water(request):
    return render(request, 'water.html')


def wind(request):
    return render(request, 'wind.html')


def earth(request):
    return render(request, 'earth.html')


def science(request):
    return render(request, 'science.html')
