// Menu Toggle for Mobile
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", function () {
  nav.classList.toggle('show');
  menu.classList.toggle('click');
})

// Sticky Navbar
// Add .sticky class when scrolled
var navbar = document.getElementById("header");

window.onscroll = function () {
  if (window.pageYOffset > 10) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

// Jquery for scroling
$('.page-scroll').on('click', function (e) {
  var destination = $(this).attr('href');
  var elDestination = $(destination);

  $('html').animate({
    scrollTop: elDestination.offset().top - 80
  }, 800);

  e.preventDefault();
})

// Back to top
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
});

// Hero text animation
$(window).on('load', function () {
  setTimeout(function () {
    $('.hero-text').addClass('show');
  }, 500);
});

// About text animation
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $('#About').offset().top - 450) {
    setTimeout(function () {
      $('.about-text').addClass('show');
    }, 300);
    setTimeout(function () {
      $('.about-img-content').addClass('show');
    }, 300);
  }
})

// Feature text animation
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $('#Features').offset().top - 900) {
    $('.container div').each(function (i) {
      setTimeout(function () {
        $('.container div').eq(i).addClass('show');
      }, 300 * (i + 1));
    });
  }
})

// How it's text animation
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  if (wScroll > $('#How').offset().top) {
    setTimeout(function () {
      $('.how-text').addClass('show');
    }, 300);
  }
})
