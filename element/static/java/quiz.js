var questionList = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, 0, 0];

$('.label-btn').click(function() {

    // Setting the variable
    var questionResult = Number($(this).children().val());
    var questionNumber = Number($(this).children().attr('name'));

    // Appending to the list of 16 questions
    questionList[questionNumber - 1] = questionResult;

    // Scrolling to the next question OR to the submit button if the quiz is finished

    if (questionList.includes(null) || $(this).parent().parent().hasClass('tie-breakers')) {
        $('html, body').animate({scrollTop: $('#question' + String(questionNumber)).offset().top + 60}, 500);

        if (questionList[16] != null && questionList[17] != null) {
            $('#quiz-submit2').delay(400).css('border','2px solid white');
        }
    }
    else {
        $('#quiz-submit').delay(400).css('border','2px solid white');
        $('html, body').animate({scrollTop: $('#quiz-submit').offset().top}, 1300);
    }

    // Lessening the container after selecting
    $('#question' + String(questionNumber)).css('opacity', '.3');

    // Changing the border based on the selection
    if (questionResult === -1) {
        $('#container' + String(questionNumber)).css('border', '2px solid #DC3545');
    }
    else if (questionResult === 0) {
        $('#container' + String(questionNumber)).css('border','2px solid #FFC107');
    }
    else {
        $('#container' + String(questionNumber)).css('border','2px solid #28A475');
    }
});


// Check if two elements have equal points
function checkForTieBreaker(array) {
    array.sort(function(a,b) {
        return b - a
    });
    if (array[0] === array[1]) {
        return true;
    }
    else {
        return false;
    }
};


// Finds the sums of the personality trait lists
function sum(array) {
    total = 0;
    for (i in array) {
        total += array[i];
    };
    console.log(total);
    return total;
};


// Find the final element
function findElement(dict) {

    // Sort the array based on the second element
    dict.sort(function(first, second) {
      return second[1] - first[1];
    });

    // Create a new array with only the first 5 items
    var innerArray = (dict[0]);
    return innerArray[0];
};

// When the Submit button is clicked
$('.submit-buttons').click(function() {

    // Goes back if there are unanswered questions
    if (questionList.includes(null) === true) {
        $('html, body').animate({scrollTop: 0}, 1300);
        $('#intro').html('<p style="font-weight:900; letter-spacing: 2px; font-size: 35px;">Oops!</p><p>Please answer all questions before resubmitting.')
    }

    // Commence with the completed quiz script
    else {

        // Moving everything towards the top
        $('html, body').animate({scrollTop: 0}, 1300);
        $('#to-fill').delay(1000).css('margin-top','96.5vh');

        if ($(this).attr('id') === 'submit-quiz') {
            $('.quiz-container').fadeOut(1245);
            $('#submit-container').fadeOut(200);
        }
        else{
            $('#submit-container2').fadeOut(400);
            $('.tie-breakers').fadeOut(455);
        }

        // Setting the personality trait lists
        var agreeable    = [questionList[0], questionList[4], questionList[8],  questionList[12]]
        var neurotic     = [questionList[1], questionList[5], questionList[9],  questionList[13], questionList[17]]
        var disagreeable = [questionList[2], questionList[6], questionList[10], questionList[14], questionList[16]]
        var stable       = [questionList[3], questionList[7], questionList[11], questionList[15]]

        // Summing up the trait lists
        var sumAgreeable = sum(agreeable);
        var sumNeurotic = sum(neurotic);
        var sumDisagreeable = sum(disagreeable);
        var sumStable = sum(stable);

        // Calculating the elements based on the summed trait lists
        var fire = sumDisagreeable + sumNeurotic - sumAgreeable - sumStable;
        var earth = sumDisagreeable + sumStable - sumAgreeable - sumNeurotic;
        var water = sumAgreeable + sumStable - sumDisagreeable - sumNeurotic;
        var wind = sumAgreeable + sumNeurotic - sumDisagreeable - sumStable;

        var elementsList = [fire, earth, water, wind];

        var elements = [['fire', fire], ['earth', earth], ['water', water], ['wind', wind]]

        if (checkForTieBreaker(elementsList) === false) {
            $('.quiz-container-special').fadeOut(1245);
            $('#finished-container').fadeIn(400);
            window.chosenElement = findElement(elements);
            $('#finished-container').append('<a href="' + chosenElement + '" id="final-button" class="btn btn-light"><div><p>Reveal</p><p>Your</p><p>Element</p></div></a>');
            // $('#finished-container').append('<a id="final-button" class="btn btn-light"><div><p>Reveal</p><p>Your</p><p>Element</p></div></a>');
        }

        else {
            $('#intro').html('<p style="font-weight:900; letter-spacing: 2px;">This <span style="font-style: italic;">sometimes</span> happens...</p><p>You\'re between two elements and you must break the tie!</p>')
            $('.tie-breakers').delay(2000).fadeIn(1500);
            $('#submit-container2').delay(2500).fadeIn(1500);
        };
    }
});

$( 'body' ).on('click', '#final-button', function() {
    var csrftoken = Cookies.get('csrftoken');
    $.ajax({
        synch: 'true',
        type: 'POST',
        url: '/' + String(chosenElement),

        data: {
            csrfmiddlewaretoken: csrftoken
        }
    })
});