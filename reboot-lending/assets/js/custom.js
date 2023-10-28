/**
 * Table of contents
 * -----------------------------------
 * 1.HEADER STICKY
 * 2.HEADER ACTIVE ADD CLASS
 * 3.HEADER COLLAPSE
 * 4.FIXED HEADER
 * 5.Hero5 SLIDER
 * 6.GLIGHTBOX VIDEO HERO
 * 7.ODOMETER JS
 * 8.TESTIMONIAL SLIDER
 * 9.TESTIMONIAL SLIDER V2
 * 10.PORTFOLIO SLIDER
 * 11.BLOG SLIDER
 * 12.SERVICE SLIDER
 * 13.OVERVIEW SLIDER
 * 14.CONTACT FORM
 * 15.AJAX MAILCHIMP SUBSCRIBE
 * 16.LOCAL SUBSCRIPTION
 * 17.LOCAL SUBSCRIPTION 2
 * 18.SMOOTH SCROLL ON BUTTON CLICK
 * 19.SCREENSHOT SLIDER
 * DARK VERSION
 */

(function ($) {
  "use strict";
  var PATH = {};

  /******************** 1.HEADER STICKY ********************/
  PATH.HeaderSticky = function () {
    $(".navbar-toggler").on("click", function (a) {
      a.preventDefault(), $(".navbar").addClass("navbar_fixed");
    });
  };

  /******************** 2.HEADER ACTIVE ADD CLASS ********************/
  PATH.HeaderOnePageNav = function () {
     $('#nav').onePageNav({
       currentClass: 'active',
       changeHash: false,
       scrollSpeed: 1000,
       scrollOffset: 80
     });
  };

  /******************** 3.HEADER COLLAPSE ********************/
  PATH.MenuClose = function () {
    $(".navbar-nav a").on("click", function () {
      var toggle = $(".navbar-toggler").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
  };

  /******************** 4.FIXED HEADER ********************/
  PATH.HeaderFixed = function () {
    var varHeaderFix = $(window).scrollTop() >= 60,
      $navbar = $(".header");
    if (varHeaderFix) {
      $navbar.addClass("navbar_fixed");
    } else {
      $navbar.removeClass("navbar_fixed");
    }
  };
  /******************** 5.Hero5 SLIDER  ********************/
  PATH.Hero5Slide = function () {
    new Swiper(".hero5-slide", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: "cards",
      grabCursor: true,
    });
  };
  /******************** 5.GLIGHTBOX VIDEO HERO ********************/
  PATH.videoModal = function () {
    GLightbox({
      selector: ".glightbox3",
    });
  };
  /******************** 6.GLIGHTBOX VIDEO HERO ********************/
  PATH.SoftwarePreview = function () {
    GLightbox({
      selector: ".glightbox2",
      slideEffect: "zoom",
    });
  };

  /******************** 7.ODOMETER JS  ********************/
  PATH.OdoMeter = function () {
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  };

  /******************** 8.TESTIMONIAL SLIDER  ********************/
  PATH.TestimonialSlide = function () {
    new Swiper(".testimonialSlider", {
      spaceBetween: 18,
      loop: true,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  /******************** 9.TESTIMONIAL SLIDER V2  ********************/
  PATH.TestimonialSliderV2 = function () {
    new Swiper(".testimonialSliderv2", {
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };

  /******************** 10.PORTFOLIO SLIDER  ********************/
  PATH.PortfolioSlider = function () {
    new Swiper(".portfolio4__slider", {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  /******************** 11.BLOG SLIDER  ********************/
  PATH.BlogSlide = function () {
    new Swiper(".blog-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1170: {
          slidesPerView: 3,
        },
      },
    });
  };
  /******************** 12.SERVICE SLIDER  ********************/
  PATH.ServiceSlide = function () {
    new Swiper(".service-slider", {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });
  };

  /******************** 13.OVERVIEW SLIDER  ********************/
  PATH.OverviewSlide = function () {
    new Swiper(".overview-slide", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    });
  };

  /******************** 14.CONTACT FORM ********************/
  PATH.ContactForm = function () {
    function isValidEmail(emailAddress) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      return pattern.test(emailAddress);
    }
    var $contact = $("#contact-form");
    if ($contact.length) {
      $contact.on("submit", function (e) {
        e.preventDefault();
        var success = $(this).find(".email-success"),
          failed = $(this).find(".email-failed"),
          loader = $(this).find(".email-loading"),
          postUrl = $(this).attr("action");
        var data = {
          name: $(this).find(".contact-name").val(),
          email: $(this).find(".contact-email").val(),
          subject: $(this).find(".contact-subject").val(),
          message: $(this).find(".contact-message").val(),
        };
        if (
          isValidEmail(data["email"]) &&
          data["message"].length > 1 &&
          data["name"].length > 1
        ) {
          $.ajax({
            type: "POST",
            url: postUrl,
            data: data,
            beforeSend: function () {
              loader.fadeIn(1000);
            },
            success: function (data) {
              loader.fadeOut(1000);
              success.delay(500).fadeIn(1000);
              failed.fadeOut(500);
            },
            error: function (xhr) {
              // if error occured
              loader.fadeOut(1000);
              failed.delay(500).fadeIn(1000);
              success.fadeOut(500);
            },
            complete: function () {
              loader.fadeOut(1000);
            },
          });
        } else {
          loader.fadeOut(1000);
          failed.delay(500).fadeIn(1000);
          success.fadeOut(500);
        }
        return false;
      });
    }
  };

  /******************** 15.AJAX MAILCHIMP SUBSCRIBE ********************/
  PATH.AjaxChimp = function () {
    $("#subscribe-mailchimp").ajaxChimp({
      callback: mailchimpCallback,
      url: "", // Replace your mailchimp post url inside double quote "".
    });

    function mailchimpCallback(resp) {
      var error_msg = $("#subscribe-mailchimp").find(".error-msg");
      var success_msg = $("#subscribe-mailchimp").find(".success-msg");

      if (resp.result === "success") {
        error_msg.fadeOut(200);
        success_msg.html(resp.msg).fadeIn(200);
      } else if (resp.result === "error") {
        success_msg.fadeOut(200);
        error_msg.html(resp.msg).fadeIn(200);
      }
    }
  };

  /******************** 16.LOCAL SUBSCRIPTION ********************/
  PATH.LocalSubs = function () {
    $("#subscribe, #subscribehero").submit(function (e) {
      e.preventDefault();
      var email = $("#subscriber-email, #subscriber-email-hero").val();
      var dataString = "email=" + email;

      function isValidEmail(emailAddress) {
        var pattern = new RegExp(
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        );
        return pattern.test(emailAddress);
      }

      if (isValidEmail(email)) {
        $.ajax({
          type: "POST",
          url: "assets/subscribe/subscribe.php",
          data: dataString,
          success: function () {
            $(".success-msg").fadeIn(1000);
            $(".error-msg").fadeOut(500);
            $(".hide-after").fadeOut(500);
          },
        });
      } else {
        $(".error-msg").fadeIn(1000);
      }

      return false;
    });
  };
  /******************** 17.LOCAL SUBSCRIPTION 2 ********************/
  PATH.LocalSubs2 = function () {
    $("#subscribe2").submit(function (e) {
      e.preventDefault();
      var email = $("#subscriber-email2").val();
      var dataString = "email=" + email;

      function isValidEmail(emailAddress) {
        var pattern = new RegExp(
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        );
        return pattern.test(emailAddress);
      }

      if (isValidEmail(email)) {
        $.ajax({
          type: "POST",
          url: "assets/subscribe/subscribe.php",
          data: dataString,
          success: function () {
            $(".success-msg").fadeIn(1000);
            $(".error-msg").fadeOut(500);
            $(".hide-after").fadeOut(500);
          },
        });
      } else {
        $(".error-msg").fadeIn(1000);
      }

      return false;
    });
  };

  /******************** 18.SMOOTH SCROLL ON BUTTON CLICK  ********************/
  $(document).on("click", "a.smooth", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });

  /******************** 19.SCREENSHOT SLIDER  ********************/
  PATH.ScreenshotSlider = function () {
    new Swiper(".screenshot-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      autoplay: false,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  /******************** DOCUMENT READY FUNCTION ********************/
  $(function () {
    PATH.HeaderSticky();
    PATH.HeaderOnePageNav();
    PATH.MenuClose();
    PATH.videoModal();
    PATH.SoftwarePreview();
    PATH.OdoMeter();
    PATH.TestimonialSlide();
    PATH.TestimonialSliderV2();
    PATH.PortfolioSlider();
    PATH.BlogSlide();
    PATH.ServiceSlide();
    PATH.OverviewSlide();
    PATH.ContactForm();
    PATH.AjaxChimp();
    PATH.LocalSubs();
    PATH.LocalSubs2();
    PATH.Hero5Slide();
    PATH.ScreenshotSlider();
  });

  /******************** WINDOW ON SCROLL FUNCTION ********************/
  $(window).on("scroll", function () {
    PATH.HeaderFixed();
  });

  /******************** WINDOW ON LOAD FUNCTION ********************/
  $(window).on("load", function () {});
})(jQuery);

/******************** DARK VERSION ********************/
function setTheme(themeName) {
  localStorage.setItem("reboot_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("reboot_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
(function () {
  if (localStorage.getItem("reboot_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
