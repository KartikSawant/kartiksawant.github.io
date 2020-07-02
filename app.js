var slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    duration: 1000,
    reset: true,
};
var slideRight = {
    distance: '100%',
    origin: 'right',
    opacity: 0,
    duration: 1000,
    reset: true,
};
var slideLeft = {
    distance: '100%',
    origin: 'left',
    opacity: 0,
    duration: 1000,
    reset: true,
};
var slideDown = {
    distance: '100%',
    origin: 'top',
    opacity: 0,
    duration: 1000,
    reset: true,
};
var slideF={
  delay:500,
  distance: '100%',
  origin: 'right',
  opacity: 0,
  duration: 1000,
  reset: true,
}
ScrollReveal().reveal('.name h4',slideDown);
ScrollReveal().reveal('.name h1',slideUp);
ScrollReveal().reveal('.name #arrow',slideDown);
ScrollReveal().reveal('#react',slideUp);
ScrollReveal().reveal('#flutter',slideLeft);
ScrollReveal().reveal('#ps',slideRight);
ScrollReveal().reveal('#dp',slideLeft);
ScrollReveal().reveal('#f1',slideF);
ScrollReveal().reveal('.school .row',slideUp);
ScrollReveal().reveal('#skill div',slideLeft);
ScrollReveal().reveal('#link',slideUp);
ScrollReveal().reveal('#git',slideDown);
ScrollReveal().reveal('#insta',slideUp);
ScrollReveal().reveal('#fb',slideDown);
ScrollReveal().reveal('#twitter',slideUp);
//nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//top
mybutton = document.getElementById("top");
myHam = document.getElementById("ham");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myHam.style.color = "#818181";
  } else {
    myHam.style.color = "#ffffff";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}