// Menu Toggle for Mobile
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const navButton = document.getElementById("menu-toggle span");

menu.addEventListener("click", function () {
  nav.classList.toggle('show');
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
