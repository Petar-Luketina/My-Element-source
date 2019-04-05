
// Hamburger menu
$('#hamburger').on('click', function() {

  if ($('ul').hasClass('disappear')) {
    $('ul').toggleClass('disappear');
    $('#one').toggleClass('hamburger-lines-toggle-one');
    $('#two').toggleClass('hamburger-lines-toggle-two');
    $('#three').toggleClass('hamburger-lines-toggle-three');
    setTimeout(function(){
      $('#hidden-nav').toggleClass('move1');
      $('#hidden-nav').toggleClass('move2');
    }, 050)}

  else {
    $('#hidden-nav').toggleClass('move1');
    $('#hidden-nav').toggleClass('move2');
    $('#one').toggleClass('hamburger-lines-toggle-one');
    $('#two').toggleClass('hamburger-lines-toggle-two');
    $('#three').toggleClass('hamburger-lines-toggle-three');
    setTimeout(function() {
      $('ul').toggleClass('disappear')
    }, 500)}
});

// Nav bar resize for every page
$(window).resize(function() {
    if ($('#hidden-nav').hasClass('move2')) {
        $('#hidden-nav').toggleClass('move1');
        $('#hidden-nav').toggleClass('move2');
        $('#one').toggleClass('hamburger-lines-toggle-one');
        $('#two').toggleClass('hamburger-lines-toggle-two');
        $('#three').toggleClass('hamburger-lines-toggle-three');
        $('ul').toggleClass('disappear');
    }
});

// Changes the opacity on the Science page
function opacityFunction(elementV, opacityV) {
    $(elementV).css('opacity',opacityV);
}
var target = $('#space')
$('#down-arrow').click(function(e){
    e.preventDefault();
    opacityFunction('#firstBlock',0);
    opacityFunction(target,.05);
    setTimeout("opacityFunction(target,1)", 3100);
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 5000);
    setTimeout("opacityFunction('#firstBlock',1)", 6000);
})

// Comment block on every element page
$('#btn-dark').click(function() {
    $('#text').css({display: "block"});
    $('#commentBlock').css({height: '250px'});
    $('#btn-dark').html('Click to Submit Comment');
    $('#btn-dark').css({'top': '225px', 'margin-left': '-128px'});
    $('#btn-dark').removeClass('btn-dark').addClass('btn-success');
    $('#name').css({'display':'block'})
});

$('#quiz-submit').click(function() {

    var selection_list = []


});

























