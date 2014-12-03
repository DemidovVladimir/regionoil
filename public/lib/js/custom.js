$(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>600)
      {
        $('.header-info').slideUp(100);
				$('.header').addClass('trans');
      } 
      else
      {
        $('.header-info').slideDown(100);
				$('.header').removeClass('trans');
      }
    });
  });
  
/* 
 * Style Switcher JS
 */

$(document).ready(function() {
	$('.style-btn').click(function (){
			var $box = $(this).parent('.style-switcher');
			if ($box.css('left') == '-31px'){
				$box.animate({ left: 0 }, 400);
			}
			else {
				$box.animate({ left: -31 }, 400);
			}
	});
});

/*
 * ScrollTo plugins
 */
 
jQuery(function( $ ){
	$('.scroll-link').click(function(){
		var section = $($(this).data("to"));
		var top = section.offset().top;
		$("html, body").animate({ scrollTop: top }, 1000);

		if($(window).width() < 768){
			var $navMain = $(".navbar-collapse");
			$navMain.collapse('hide');
		}
		return false;
	});
});

 
/* *************************************** */  
/* Parallax */
/* *************************************** */  

$(document).ready(function(){
	$('.parallax-slider').parallax();
	$('.parallax-one').parallax();
	$('.parallax-two').parallax();
    $('.parallax-three').parallax();
    $('.parallax-four').parallax();
});

/* *************************************** */  
/* Way Points JS */
/* *************************************** */  

$(document).ready(function(){
	
	// Hero's Way Points
	$('.hero').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInLeft');
	}, { 
		offset: '70%' 
	});
	
	// Features Item Way Points
	$('.feature-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { 
		offset: '80%' 
	});
	
	// Page content Item Way Points
	$('.promo-inner').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInRight');
	}, { 
		offset: '80%' 
	});
	
	// Service Item Way Points
	$('.service-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { 
		offset: '90%' 
	});

    // Equipment Item Way Points
    $('.equipment-item').waypoint(function(down){
        $(this).addClass('animation');
        $(this).addClass('fadeIn');
    }, {
        offset: '90%'
    });
	
	// Pricing Item Way Points
	$('.pricing-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { 
		offset: '80%' 
	});
	
	// blog entry Way Points
	$('.blog .entry').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { 
		offset: '80%' 
	});
	
	// cta Way Points
	$('.cta .cta-content').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { 
		offset: '100%' 
	});
	
	// about skill Way Points
	$('.about .about-skill').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { 
		offset: '80%' 
	});
	
	// About Member Way Points
	$('.about-member').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('flipInY');
	}, { 
		offset: '90%' 
	});
	
		// countTo plugin js

	$('.count .counter').waypoint(function(down){
		if (!$(this).hasClass('stop')) {
			$(this).countTo({
				from: 0,
				speed: 100,
				refreshInterval: 2
			});
			$(this).addClass('stop');
		}
	}, { 
		offset: '90%' 
	});
	
	// Process content Way Points
	$('.process-content').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { 
		offset: '80%' 
	});
});
	
/* ******************************************** */
/*  JS for Tool Tip  */
/* ******************************************** */

$('.social-tooltip').tooltip();

/* ******************************************** */
/* Owl-Carousel sponsor Slider */
/* ******************************************** */
 
 $(document).ready(function() {
  $("#owl-sponsor").owlCarousel({
		autoPlay: 3000,
		slideSpeed: 1000,
		paginationSpeed : 1200,
		pagination: false,
		stopOnHover: true,
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3]
  });
});

/* *************************************** */  
/* Scroll to Top */
/* *************************************** */  

  $(".totop").hide();

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop()>300)
      {
        $('.totop').fadeIn();
      } 
      else
      {
        $('.totop').fadeOut();
      }
    });

    $('.totop a').click(function (e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: 0}, 1500);
    });

  });

/* ******************************************** */


// BxSlider for testimonial

$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 			'fade',
		speed: 			1500,
		minSlides: 	1,
		maxSlides: 	1,
		controls: 	false,
		auto: 			true
	});
});

// Gmap v3

$(function(){
	$('#gmap').gmap3({
		map:{
			options:{
				center:[51.183067, 71.425539],
				zoom:12,
				scrollwheel: false
			}
		},
        marker:{
            latLng:[51.183067, 71.425539]
        }
	});
	
});

