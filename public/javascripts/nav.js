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
    $('nav a.dotstyle').each(function () {
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

  $('body').css('display', 'none');
  $('body').fadeIn(2000);

$(document).on('ready', function(){

  $('nav a').click(scrollToSection);
  $(document).on('scroll', onScroll);

});