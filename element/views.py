from django.shortcuts import render
import requests
import json
from . import questions
from django.http import JsonResponse


def elements_index(request):
    return render(request, 'elements-index.html')


def explore(request):
    return render(request, 'explore.html')


def fire(request):

    get = requests.get(url_comment + 'Fire/Comments/.json?auth=' + auth_comment_key)
    got_comments = get.json()

    comments = {
        'comments': got_comments,
    }

    return render(request, 'fire.html', comments)


def water(request):

    get = requests.get(url_comment + 'Water/Comments/.json?auth=' + auth_comment_key)
    got_comments = get.json()

    comments = {
        'comments': got_comments,
    }

    return render(request, 'water.html', comments)


def wind(request):

    get = requests.get(url_comment + 'Wind/Comments/.json?auth=' + auth_comment_key)
    got_comments = get.json()

    comments = {
        'comments': got_comments,
    }

    return render(request, 'wind.html', comments)


def earth(request):

    get = requests.get(url_comment + 'Earth/Comments/.json?auth=' + auth_comment_key)
    got_comments = get.json()

    comments = {
        'comments': got_comments,
    }

    return render(request, 'earth.html', comments)


def science(request):
    return render(request, 'science.html')


def stats(request):

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
        return HTML(request, 'stats.html')


def quiz(request):

    if request.method == 'POST':

        form = request.POST.get('question-form')
        print(form)

        return render(request, 'quiz.html')

    else:

        qs = {
            'qs': questions.question_list
        }

        return render(request, 'quiz.html', qs)


def api(request):

    get = requests.get(url + '?auth=' + auth_key)
    elements = get.json()
    total = elements['Fire'] + elements['Wind'] + elements['Earth'] + elements['Water']
    elements = {

        'Fire': {
            'Number':  elements['Fire'],
            'Percent': round(((elements['Fire'] / total) * 100), 1),
        },

        'Wind': {
            'Number': elements['Wind'],
            'Percent': round(((elements['Wind'] / total) * 100), 1),
        },

        'Earth': {
            'Number': elements['Earth'],
            'Percent': round(((elements['Earth'] / total) * 100), 1),
        },

        'Water': {
            'Number': elements['Water'],
            'Percent': round(((elements['Water'] / total) * 100), 1),
        },

        'Total': total,
    }

    return JsonResponse(elements, json_dumps_params={'indent': 2})
