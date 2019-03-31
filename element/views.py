from django.shortcuts import render
import requests
import json
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


def stats(request):
    url = 'https://my-element-c1df9.firebaseio.com/.json'
    auth_key = 'MjFhM9ptYix3uDIUemK4hqwDpdw5iyhdpggFZhQy'
    try:
        get = requests.get(url + '?auth=' + auth_key)
        elements = get.json()
        total = elements['Fire'] + elements['Wind'] + elements['Earth'] + elements['Water']

        elements = {
            'Fire': elements['Fire'],
            'FirePercent': round(((elements['Fire'] / total) * 100), 1),
            'Wind': elements['Wind'],
            'WindPercent': round(((elements['Wind'] / total) * 100), 1),
            'Earth': elements['Earth'],
            'EarthPercent': round(((elements['Earth'] / total) * 100), 1),
            'Water': elements['Water'],
            'WaterPercent': round(((elements['Water'] / total) * 100), 1),
            'Total': total,
        }

        return render(request, 'stats.html', elements)

    except ConnectionError:
        return render(request, 'stats.html')

