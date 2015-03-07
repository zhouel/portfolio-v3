function scrollToSection(){
  $('.current').removeClass('current');
    $(this).addClass('current');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
}

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    var tolerance = 100;
    $('nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top - tolerance <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass('current'); //added to remove current class from all a elements
            currLink.addClass('current');
        }
        else{
            currLink.removeClass('current');
        }
    });
}

function aboutMargin(event){

  var bHeight = $('.blurb').height();
  var aHeight = $('.about').height(); // ??

  if(bHeight > aHeight){
    $('.blurb').css('padding-top', '0');
    $('.about').css('padding-top', (bHeight - aHeight)/2 + 'px');
  } else if (aHeight > bHeight){
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

$(document).on('ready', function(){

  $('.arrow').find('a').click(scrollToSection);
  $('nav a').click(scrollToSection);


  // do fading 5 times
  for(i=0;i<5;i++) {
    $(".arrow").fadeTo('slow', 0.2).fadeTo('slow', 1.0);
  }

  aboutMargin();
  $(window).on('resize', aboutMargin);
  $(document).on('scroll', onScroll);

});