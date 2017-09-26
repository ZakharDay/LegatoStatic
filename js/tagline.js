$(function() {
  var counter = 0

  function move() {
    if (counter >= 6) {
      counter = 0
    }

    $('.SplashScreen .line')
      .removeClass('step0')
      .removeClass('step1')
      .removeClass('step2')
      .removeClass('step3')
      .removeClass('step4')
      .removeClass('step5')
      .removeClass('step6')
      .removeClass('step7')
      .addClass('step' + counter)
    counter = counter + 1
  }

  function animateWithTimeout() {
    move()
    setTimeout(move, 3000)
    setTimeout(move, 6000)
    setTimeout(move, 9000)
    setTimeout(move, 12000)
    setTimeout(move, 15000)
    setTimeout(move, 18000)
    setTimeout(animateWithTimeout, 26000)
  }

  animateWithTimeout()
})
