/*var body = document.getElementsByTagName("body");*//*
var bodyId = document.querySelector(".body").addEventListener("click", hideDiv)*/
/*
function myFunction(mobile) {
  if (mobile.matches) { // If media query matches
    document.getElementsByClassName;
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var mobile = window.matchMedia("(max-width: 765px)")
myFunction(mobile) // Call listener function at run time
mobile.addListener(myFunction) // Attach listener function on state changes
*/



/*var body = document.getElementsById("body");*/
var mobileMenu = document.getElementById("mobileMenu");
var mobileNavigation = document.getElementById("mobileNavigation");
var closeMenu = document.getElementById("closeMenu");
/*var backgroundHeader = document.querySelector(".backgroundHeader").addEventListener("click", hideDiv);*/
var backgroundBody = document.querySelector(".backgroundBody").addEventListener("click", hideDiv);
var imageHeader = document.querySelector(".ourMenusImage").addEventListener("click", hideDiv)
var headerText = document.querySelector(".headerText").addEventListener("click", hideDiv)



mobileMenu.addEventListener("click", displayDiv);

function displayDiv (){
  mobileNavigation.style.display = "block";
  mobileMenu.style.display = "none";
  closeMenu.style.display = "block";
}

closeMenu.addEventListener("click", hideDiv);

function hideDiv(){
  mobileNavigation.style.display = "none";
  mobileMenu.style.display = "block";
  closeMenu.style.display = "none";
 }
 
