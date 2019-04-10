var out = true;

$('#share').mouseenter(function() {
  if (out === false) {
    $('#fb').css({'right': '35px', 'bottom': '58px'});
    $('#pin').css({'right': '56px', 'bottom': '52px'});
    $('#twit').css({'right': '59px', 'bottom': '35px'});
}});
$('#share').mouseleave(function() {
  if (out === false) {
    $('#fb, #twit, #pin').css({'right':'33px', 'bottom': '38px'});
  }});


$('#share').click(function(){
  out = !out;
  $('div', this).toggleClass('fa-share-alt fa-close');

  if (out === true) {
    $('#fb').css({'right': '35px', 'bottom': '100px'});
    $('#pin').css({'right': '80px', 'bottom': '80px'});
    $('#twit').css({'right': '100px', 'bottom': '35px'});
  }
  else {
    $('#fb, #twit, #pin').css({'right':'33px', 'bottom': '38px'});
  }
});