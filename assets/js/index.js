window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function w3_open() {
  const btMenuVerticalOn = document.getElementById("body");
  btMenuVerticalOn.classList.add("btMenuVerticalOn")
  document.getElementById("headerTop").style.transform = "translateX(320px)";
  document.getElementById("header").style.transform = "translateX(320px)";
  document.getElementById("sidebar").style.transform ="translateX(0)";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
  document.getElementById("closeNav").style.display = 'block';

}
function w3_close() {
  const btMenuVerticalOn = document.getElementById("body");
  btMenuVerticalOn.classList.remove("btMenuVerticalOn")
  document.getElementById("openNav").style.display = 'block';
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("headerTop").style.transform = "none"
  document.getElementById("header").style.transform = "none"
  document.getElementById("closeNav").style.display = 'none';
  document.getElementById("sidebar").style.backgroundColor="transparent";
}