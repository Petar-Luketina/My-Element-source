$(window).scroll(function() {
    $('.element-picture').css({'top': String(($(window).scrollTop())/-3) + 'px'});
});


$( window ).ready(function() {
    $('.comment-container:nth-of-type(2n)').remove();
});


$( window ).on('resize load', function() {
    var w = String( $( '.element_column' ).css('width') )
    $( '.element_column' ).animate({ height: w}, 1);
});

// Expands the circles when one of the four elements is clicked
var expandingCircleCounter = 1;
var colors = ['#f76566', 'lightgreen', '#fbff66', 'lightblue'];

$( '.element_column' ).click(function() {
    var index = ($( this ).index());
    expandingCircleCounter = expandingCircleCounter + 1;

    if (expandingCircleCounter % 2 == 0) {
        $( '.circleOne' ).css({
            'z-index': '1',
            background: colors[index],
        })
        $( '.circleOne' ).stop().animate({
            height: '300vh',
            width: '100vw',
        }, 1000);
        $( '.circleTwo' ).delay(1000).animate({
            'z-index': '0',
            width: '200px',
            height: '200px',
        },1);
    }
    else {
        $( '.circleTwo' ).css({
            'z-index': '1',
            background: colors[index],
        })
        $( '.circleTwo' ).stop().animate({
            height: '300vh',
            width: '100vw',
        }, 1000);

        $( '.circleOne' ).delay(1000).animate({
            'z-index': '0',
            width: '200px',
            height: '200px',
        },1);
    }
});