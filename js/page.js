// Mobile Navigation
function myFunction() {
  var x = document.getElementById("main-nav2");
    if (x.className === "main-nav3") {
    x.className += " responsive";
  } else {
    x.className = "main-nav3";
  }
}


var slideIndex = 1; // creates a new variable, names it slideIndex, and sets it = to 1

showSlides(slideIndex); // uses the index variable as the parameter of the showSlides function

function plusSlides(n) { // function for incrementing (adding to) slideIndex, takes n as its parameter
  showSlides(slideIndex += n); // function runs showSlides with index + n as its parameter
}

function currentSlide(n) { // creates function identifying the current slide, using n as the parameter
  showSlides(slideIndex = n); // function runs showSlides with index = to n as the parameter
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var indicator = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < indicator.length; i++) {
      indicator[i].className = indicator[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  indicator[slideIndex-1].className += " active";
}
// Image modal functions - Requires jQuery!!!
$(".button").on("click", function() { // when item with class of button is clicked, fire function
  var modal = $(this).data("modal"); // sets modal var equal to data attribute
  $(modal).show(); // opens up modal (much code hidden here by jQuery)
});
$(".modal").on("click", function(e) { // sets up click function
  var className = e.target.className; // var className set to event target
  if(className === "modal" || className === "close"){ // if conditions are met...
    $(this).closest(".modal").hide(); // then hide the modal
  } // closes if-statement
}); // closes function
