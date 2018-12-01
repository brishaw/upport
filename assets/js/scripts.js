// intro
$(".control-button").on("click", function(){
  $(".top").css({ "margin-top": "-250%", "transition-property": "margin", "transition-delay": ".7s", "transition-duration": "3.7s", "transition-timing-function" : "ease"});
  $(".right").css({ "margin-right": "-100%", "transition-property": "margin", "transition-delay": ".3s", "transition-duration": "1s", "transition-timing-function": "ease"});
  $(".left").css({ "margin-left": "-100%", "transition-property": "margin", "transition-delay": ".1s", "transition-duration": "1s", "transition-timing-function": "ease"});
  
  $(this).addClass("ani");
  
  setTimeout(off, 2000);
  
  function off() {
    console.log("called off");
    $(".control-button").css("display", "none");
    $(".right").css("display", "none");
    $(".main").fadeIn("slow");
  }; // off
  
  // setInterval(function(){
  //   location.reload();
  // },10000);
})

// parallax

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || function (f) { setTimeout(f, 1000 / 60) }

var test1 = document.getElementById('test1')
var test2 = document.getElementById('test2')

function parallaxbubbles() {
  var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
  test1.style.top = -scrolltop * .2 + 'px' // move test1 at 20% of scroll rate
  test2.style.top = -scrolltop * .5 + 'px' // move test2 at 50% of scroll rate
}

window.addEventListener('scroll', function () { // on page scroll
  requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)

// smooth scroll

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// modals

// var modal = document.getElementById("myModal");

// var btn = document.getElementById("btn1");

// var span = document.getElementsByClassName("close")[0];

// btn1.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

var modal = document.getElementById("myModal");
var img = $(".myImg");
var modalImg = $("#images");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

$(".myImg").click(function() {
  modal.style.display = "block";
  var newSrc = this.src;
  modalImg.attr("src", newSrc);
  captionText.innerHTML = this.alt;
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// var winH = $(window).height();
// var winW = $(window).width();

// $(".modal").css('top', winH / 2 - $(".modal").height() / 2);
// $(".modal").css('left', winW / 2 - $(".modal").width() / 2);


var gridImage = $(".myImg");

for (i = 0; i < gridImage.length; i++) {
  gridImage.attr("data-num", [i]);
  console.log(gridImage[i]);
}