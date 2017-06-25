
$(function() {
  // $(window).on('scroll', function() {
  //   console.log('gogogo')
  //
  //   $('#faded').css('opacity','0');
  //   $('.first-page-wrapper').toggleClass('transparent');
  //   $('.menubar').toggleClass('menu-main');
  // })

  var firstScreen = $('.first-page-wrapper');
  var range = 200;

  $(window).on('scroll', function () {

    console.log('im being scrolled')

    $('#faded').css('opacity','0');

    var scrollTop = $(this).scrollTop(),
        height = firstScreen.outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;

    firstScreen.css({ 'opacity': calc });

    if (calc > '1') {
      firstScreen.css({ 'opacity': 1 });
      $('.menubar').addClass('menu-main');
    } else if ( calc < '0' ) {
      firstScreen.css({ 'opacity': .25 });
      $('.menubar').removeClass('menu-main');
    }
  });
})
