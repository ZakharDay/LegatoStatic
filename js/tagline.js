$(function() {
  var counter = 0

  function move() {
    if (counter >= 8) {
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
      .removeClass('step8')
      .removeClass('step9')
      .addClass('step' + counter)
    counter = counter + 1
  }

  function animateWithTimeout() {
    move()
    setTimeout(move, 4000)
    setTimeout(move, 8000)
    setTimeout(move, 12000)
    setTimeout(move, 16000)
    setTimeout(move, 20000)
    setTimeout(move, 24000)
    setTimeout(move, 28000)
    setTimeout(move, 32000)
    setTimeout(animateWithTimeout, 38000)
  }

  animateWithTimeout()
})
