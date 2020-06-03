var currentSlide = 0

var totalSlides = $('.holder div').length

var moveSlide = function (slide) {
  var leftPosition = (-slide * 960) + 'px'
  $('.holder').css('left', leftPosition)
  var slideNumber = slide + 1
  $('.steps').text(slideNumber + ' / ' + totalSlides)
}

var nextSlide = function () {
  currentSlide = currentSlide + 1
  if (currentSlide >= totalSlides) {
    currentSlide = 0
  }
  moveSlide(currentSlide)
}

var previousSlide = function () {
  currentSlide = currentSlide - 1
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }
  moveSlide(currentSlide)
}

var autoSlide = setInterval(function() {
  nextSlide()
}, 3000)

$('.next').on('click', function() {
  clearInterval(autoSlide)
  nextSlide()
})

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  previousSlide()
})

var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + ' / ' + totalSlides)
