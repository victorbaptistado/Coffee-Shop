"use strict";
/* ----- MOBILE NAVIGATION MENU ------- */
var mobileMenu = document.getElementById("mobileMenu");
var mobileNavigation = document.getElementById("mobileNavigation");
var closeMenu = document.getElementById("closeMenu");
mobileMenu.addEventListener("click", displayDiv);
function displayDiv() {
    mobileNavigation.style.display = "block";
    mobileMenu.style.display = "none";
    closeMenu.style.display = "block";
}
closeMenu.addEventListener("click", hideDiv);
function hideDiv() {
    mobileNavigation.style.display = "none";
    mobileMenu.style.display = "block";
    closeMenu.style.display = "none";
}
/* ----- FIRST NAVIGATION MENU ------- */
/*

var index = document.getElementById("index");
var ourCoffees = document.getElementById("ourCoffees");
var ourMenus = document.getElementById("ourMenus");

*/
