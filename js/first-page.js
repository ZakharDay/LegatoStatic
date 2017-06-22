$(function(){
  $(window).scroll(function() {
    console.log('scroll')
    $('#faded').css('opacity','0')
  });


  // var firstScreen = $(".first-page-wrapper");
  //
  // $(window).on("scroll", function() {
  //   var scrolltop = $(this).scrollTop();
  //   firstScreen.css({"opacity": (1 - scrolltop/100)});
  //   $('.menubar').toggleClass('menu-main')
  // });

  $(document).on('scroll', function() {
    var el = document.getElementsByClassName('first-page-wrapper')[0]
    var elTop = el.getBoundingClientRect().top
    var documentHeight = document.documentElement.clientHeight

    if ((-elTop) > documentHeight) {
      $('.menubar').removeClass('menu-main')
      // $('.first-page-wrapper').css('opacity','.25')
      console.log ('go white')
    }

    if ((-elTop) < documentHeight) {
      // $('.first-page-wrapper').css('opacity','1')
      $('.menubar').addClass('menu-main')
      console.log('go transparent')
    }

    // console.log('Scroll', elTop, documentHeight)
  })
})
