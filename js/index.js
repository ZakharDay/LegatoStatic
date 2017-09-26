$(function() {
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop()

    if (scrollTop > 0) {
      $('body').removeClass('initial')
      $('video').get(0).pause()
    } else {
      $('body').addClass('initial')
      $('video').get(0).play()
    }
    
  })
})
