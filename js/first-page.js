$(function() {
  $(window).on('scroll', function() {
    console.log('gogogo')
    var scrollTop = $(this).scrollTop()

    if (scrollTop > 0) {
      $('#faded').css('opacity','0')
      $('.first-page-wrapper').addClass('transparent')
      $('.menubar').removeClass('menu-main')
      $('#video').get(0).pause()
    } else {
      $('#faded').css('opacity','1')
      $('.first-page-wrapper').removeClass('transparent')
      $('.menubar').addClass('menu-main')
      $('#video').get(0).play()
    }
  })
})
