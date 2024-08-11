// ------------------------------------------------
// Project Name: Oomph - Halloween Style Coming Soon & Landing Page Template
// Project Description: Oomph - awesome coming soon template to kick-start your project
// Tags: mix_design, oomph, coming soon, under construction, template, coming soon page, html5, css3
// Version: 3.0.0
// Build Date: December 2020
// Last Update: October 2023
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. ParticlesJS Background
//  3. Magnific Popup
//  4. Skillbars Settings
//  5. Vegas Settings
//  6. KBW-Countdown Settings
//  7. Mailchimp Notify Form
//  8. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader__logo").removeClass('fadeIn').addClass('fadeOut');
  },600);

  setTimeout(function(){
    $('body').addClass('loaded');
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('fade loaded');
  },1200);
  // --------------------------------------------- //
  // Loader & Main Screen Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Background Start
  // --------------------------------------------- //
  // Stars BG - particlesJS
  var bgndTriangles = $('#stars-js');
  if (bgndTriangles.length) {
    particlesJS('stars-js', {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": false,
            "value_area": 2604.1872173865
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "star",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 0.01,
            "opacity_min": 0.08,
            "sync": false
          }
        },
        "size": {
          "value": 4.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": true,
          "straight": true,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 200,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 170,
            "size": 8,
            "duration": 2,
            "opacity": 0.3,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };
  // --------------------------------------------- //
  // ParticlesJS Background End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#showreel-trigger').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); },
      close: function() { $('body').removeClass('overflow-hidden'); }
    }
	});
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1080x1440/383838/8d8d8d" },
        { src: "https://dummyimage.com/1080x1440/383838/8d8d8d" },
        { src: "https://dummyimage.com/1080x1440/383838/8d8d8d" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  };
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2024, 2, 17), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2024, 2, 17), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

});
