var slides = document.querySelectorAll(".carousel-slide"); // it is a list
// selects all elements with the class "carousel-slide" and stores them in a variable called "slides"

var currentSlide = 0; // initializes a variable "currentSlide" to keep track of the currently displayed slide

var slideInterval = setInterval(nextSlide, 5000);
// to set the interval at which the slideshow automatically advances to the next slide (in this case, every 5 seconds)

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

/* "nextSlide" and "previousSlide" functions simply calls the "goToSlide" function 
    with an argument that represents the next or previous slide relative to the current slide
    for nextSlide current Slide it is incremented by 1 and for previousSlide it is decremented by 1 */

function goToSlide(n) {

  //console.log(n);
  slides[currentSlide].classList.remove("active");

  // accessing the "classList" property of the current slide element and calling the "remove()" method with the "active" class as an argument
  currentSlide = (n + slides.length) % slides.length;
  //console.log(currentSlide, slides.length); 

  slides[currentSlide].classList.add("active");
  // using the "classList" property and calling the "add()" method with the "active" class as an argument
}

var prev = document.querySelector(".carousel-prev");
var next = document.querySelector(".carousel-next");

prev.addEventListener("click", function (event) {
  event.preventDefault();
  clearInterval(slideInterval);
  previousSlide(); // call the prevoiusSlide function
  slideInterval = setInterval(nextSlide, 5000); // reset the sideInterval
});

next.addEventListener("click", function (event) {
  event.preventDefault();
  clearInterval(slideInterval);
  nextSlide(); // call the nextSlide function
  slideInterval = setInterval(nextSlide, 5000); // reset the sideInterval
});

/* either button is clicked, the "slideInterval" variable is cleared (to stop the automatic slideshow),
and either the "previousSlide()" or "nextSlide()" function is called (depending on which button was clicked). */
