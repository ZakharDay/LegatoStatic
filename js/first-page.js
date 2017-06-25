
$(function() {


  $(document).on('scroll', function() {

    $('#faded').css('opacity','0')
    // $('#faded').css('display','none')

    var el = document.getElementsByClassName('first-page-wrapper')[0]
    var elTop = el.getBoundingClientRect().top
    var documentHeight = document.documentElement.clientHeight

    if ((-elTop) > documentHeight) {
      $('.menubar').removeClass('menu-main')
      $('.first-page-wrapper').css('opacity','.25')
      console.log ('go white')
    }

    if ((-elTop) < documentHeight) {
      $('.first-page-wrapper').css('opacity','1')
      $('.menubar').addClass('menu-main')
      console.log('go transparent')
    }

    // var firstScreen = $(".first-page-wrapper");

    // $(document).on("scroll", function() {
    //   $('.first-page-wrapper').css('opacity','.25');
    //   $('.menubar').removeClass('menu-main')
    //   console.log('scroll happened')
    // });

    // console.log('Scroll', elTop, documentHeight)
  })
})
