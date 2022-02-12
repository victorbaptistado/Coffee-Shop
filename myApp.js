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
var mobileMenu = document.querySelector(".mobileMenu").addEventListener("click", displayDiv);
var mobileNavigation = document.getElementById("mobileNavigation");
/*var backgroundHeader = document.querySelector(".backgroundHeader").addEventListener("click", hideDiv);*/
var backgroundBody = document.querySelector(".backgroundBody").addEventListener("click", hideDiv);
var imageHeader = document.querySelector(".ourMenusImage").addEventListener("click", hideDiv)
var headerText = document.querySelector(".headerText").addEventListener("click", hideDiv)


function displayDiv (){
  mobileNavigation.style.transform = "translate(0px)";

}

function hideDiv(){

  mobileNavigation.style.transform = "translate(-300px)";
 }
 
