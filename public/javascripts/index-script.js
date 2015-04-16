function aboutMargin(event){

  var bHeight = $('.blurb').height();
  var aHeight = $('.about').height(); // ??

  if (aHeight == bHeight){
    $('.about').css('padding-top', '0');
    $('.blurb').css('padding-top', '0');
  }
  else if(bHeight > aHeight){
    $('.blurb').css('padding-top', '0');
    $('.about').css('padding-top', (bHeight - aHeight)/2 + 'px');
  } else{
    $('.about').css('padding-top', '0');        
    $('.blurb').css('padding-top', (aHeight - bHeight)/2 + 'px');

  }

  var maxHeight;
  if($('.about').css('display') != 'none'){
    maxHeight = Math.max(aHeight, bHeight);
  } else{
    maxHeight = bHeight;
  }

  var topMargin = ($(window).height() - maxHeight) / 2;
  $('#about > .row').css('padding-top', topMargin + 'px');
}

$('#projects .tiles .tile').click(function(e) {
  e.preventDefault(); 
  var slug = this.id;
  $('body').fadeOut(2000, newpage(slug));
});

function newpage(slug) {
    window.location = slug;
}


$(document).on('ready', function(){

  aboutMargin();
  $(window).on('resize', aboutMargin);

  $('.arrow').find('a').click(scrollToSection);

  // do fading 5 times
  for(i=0;i<5;i++) {
    $(".arrow").fadeTo('slow', 0.2).fadeTo('slow', 1.0);
  }

});