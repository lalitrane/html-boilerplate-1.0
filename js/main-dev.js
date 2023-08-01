
(function ($) {
  "use strict";


    if ($('.main-nav').length) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><img src="/images/hamburger.png"/></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });
    
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');

    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();

        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();


  }

  



   $('a').click(function(e) {
// $('html, body').animate({ scrollTop: 0 }, '1000');
 if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

   $('html, body').animate({
        scrollTop: 0
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
   }
});
})(jQuery);


  $(window).on('load', function(){
  $('#preloader').fadeOut('slow',function(){$(this).remove();});



});


$(document).ready(function() {




//     $(".classname").owlCarousel({
 
//       autoPlay: 6000, 
 
//       items : 6,
//       nav: true,
// navText: [" http:///Images/left.png", " http:///Images/right.png"],
// navClass: ['owl-prev', 'owl-next'],
//       margin:20,
//       pagination:false,
//       responsive: true,
//       itemsDesktop : [1199,6],
//       itemsDesktopSmall : [979,6],
//       itemsTablet : [768,3],
//       itemsMobile : [479,2],
//        singleItem : false,
//     itemsScaleUp : false
 
//   });



    });