function open() {
  $('.hamburger').hide()
  $('.close').show()
  $('.main-options').css('display','flex')
  $('.contact').show()
  // $('.fade').show()
  // $('body').css('overflow', 'hidden')
};

function close() {
  $('.hamburger').show()
  $('.close').hide()
  $('.main-options').css('display','none')
  $('.contact').hide()
  // $('.fade').hide()
  // $('body').css('overflow', 'scroll')
};

$(function() {
  $('.mobile-nav').click(function() {
    if ($('.hamburger').is(':visible')) {
      open()
    } else {
      close()
    }
    })

    $('.fade').click(function() {
      close()
    })

    // $('.contact').click(function() {
    //   close()
    // })





  })
