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

    $('figcaption').each(function(i) {
      console.log(i, this.getBoundingClientRect().top, window.innerHeight)
      var half = window.innerHeight / 2
      var top = this.getBoundingClientRect().top
      var height = this.getBoundingClientRect().height

      if (top <= half && top + height > half) {
        $(this).addClass('visible')
      } else {
        $(this).removeClass('visible')
      }
    })
  })
})
