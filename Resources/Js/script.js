$(document).ready(function(){

/********** Sticky navbar ***********/
  $(".js-features").waypoint(function(direction){
    if(direction == "down"){
      $("nav").addClass("sticky");
      $(".arrow").addClass("arrow-show");
    }
    else{
      $("nav").removeClass("sticky");
      $(".arrow").removeClass("arrow-show");
    }
},{
  offset: '50%'
});

  /*

  var waypoint = new Waypoint({
  element: document.getElementById('px-offset-waypoint'),
  handler: function(direction) {
    notify('I am 20px from the top of the window')
  },
  offset: 20
})

*/

/************ Smooth scroll **************/

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/************ Animation ************/
  $('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated fadeIn');
  },{
      offset: '60%'
  });

  $('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animated animate__fadeInUpBig');
  },{
      offset: '50%'
  });

  $('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animated fadeIn');
  },{
      offset: '50%'
  });

/*********** Mobile Nav *********/

  $('.mobile-nav-icon').click(function(){
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('fa-bars')){
      icon.addClass('fa-close');
      icon.removeClass('fa-bars');
    } else{
      icon.addClass('fa-bars');
      icon.removeClass('fa-close');
    }

  });

/********* Close icon of popup *************/

/* slider */

$(".slick-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 100,
  centerMode: true
});


});

/******* Modal ***********/

var signUpModal = document.getElementById('signUpModal');
var logInModal = document.getElementById('logInModal');
var orderFood = document.getElementById('orderFood');
document.querySelector('#signUpModalShow').onclick = function(){
  signUpModal.style.display = "block";
};
document.querySelector('#logInModalShow').onclick = function(){
  logInModal.style.display = "block";
  signUpModal.style.display = "none";
};
document.querySelector('#orderFood').onclick = function(){
  logInModal.style.display = "block";
}
document.querySelector('#signUpClose').onclick = function(){
  signUpModal.style.display = "none";
};
document.querySelector('#logInClose').onclick = function(){
  logInModal.style.display = "none";
};


window.onclick = function(event) {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  };
  if (event.target == logInModal) {
    logInModal.style.display = "none";
  }
};

/********** add and remove food item *************/
