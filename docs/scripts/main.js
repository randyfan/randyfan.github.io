"use strict";

console.info("Yeah!! Milligram is amazing.");



window.onscroll = function() {
  scrollFunction();
};

// show button/image when user scrolls below 20 pixels

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("companion-cube").style.display = "block";
  } else {
    document.getElementById("companion-cube").style.display = "none";
  }
}

// scroll to top when user clicks button/image

function topFunction() {
  document.body.scrollTop = 0; // For safari settings
  document.documentElement.scrollTop = 0; // For chrome, firefox, IE and opera settings
}
