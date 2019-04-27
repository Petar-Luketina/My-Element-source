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
    $( '#element-compare' ).css({
        background: colors[index],
    });
    $( '#choose-div' ).children().css({ color: 'black' });

});