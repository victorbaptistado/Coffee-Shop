"use strict";
var drinkBtn = document.getElementById("drinkBtn");
var foodBtn = document.getElementById("foodBtn");
/*---- EVENTS ----*/
drinkBtn.addEventListener("click", displayDrink);
foodBtn.addEventListener("click", displayFood);
drinkBtn.addEventListener("click", drinkBorder);
foodBtn.addEventListener("click", foodBorder);
/*---- DROPDOWN ----*/
var dropdownDrink = document.getElementById("myDropdownDrink");
var dropdownFood = document.getElementById("myDropdownFood");
var drinks = document.getElementById("drinks");
var foods = document.getElementById("foods");
foods.style.display = "none";
/* ---- DISPLAY DRINK || FOOD ---- */
function displayDrink() {
    /* Dropdown Drinks || Food */
    dropdownDrink.style.display = "inline";
    dropdownFood.style.display = "none";
    /* Drinks || Food */
    drinks.style.display = "inline";
    foods.style.display = "none";
}
function displayFood() {
    /* Dropdown Drinks || Food */
    dropdownDrink.style.display = "none";
    dropdownFood.style.display = "inline";
    /* Drinks || Food */
    drinks.style.display = "none";
    foods.style.display = "inline";
}
/* ---- Border Color ---- */
function drinkBorder() {
    drinkBtn.style.borderStyle = "inset";
    foodBtn.style.borderStyle = "hidden";
}
function foodBorder() {
    drinkBtn.style.borderStyle = "hidden";
    foodBtn.style.borderStyle = "inset";
}
/* ---- select DRINK ---- */
function getSelectValueDrink() {
    var selectedValue = document.getElementById("myDropdownDrink").value;
    var cafés = document.getElementById("cafés");
    var chocolateQuente = document.getElementById("chocolateQuente");
    var milkShake = document.getElementById("milkShake");
    cafés.style.display = "none";
    chocolateQuente.style.display = "none";
    milkShake.style.display = "none";
    switch (selectedValue) {
        case "todasAsBebidas":
            cafés.style.display = "inline";
            chocolateQuente.style.display = "inline";
            milkShake.style.display = "inline";
            break;
        case "cafés":
            cafés.style.display = "inline";
            break;
        case "chocolateQuente":
            chocolateQuente.style.display = "inline";
            break;
        case "shakes":
            milkShake.style.display = "inline";
            break;
    }
}
/* ---- select FOOD  ---- */
function getSelectValueFood() {
    var selectedValue = document.getElementById("myDropdownFood").value;
    var sanduíche = document.getElementById("sanduíche");
    var caféDaManhã = document.getElementById("caféDaManhã");
    sanduíche.style.display = "none";
    caféDaManhã.style.display = "none";
    switch (selectedValue) {
        case "todasAsComidas":
            sanduíche.style.display = "inline";
            caféDaManhã.style.display = "inline";
            break;
        case "sanduíche":
            sanduíche.style.display = "inline";
            break;
        case "caféDaManhã":
            caféDaManhã.style.display = "inline";
            break;
    }
}
