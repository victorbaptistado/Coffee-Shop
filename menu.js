
var drinkBtn = document.getElementById("bebida").addEventListener("click", displayDrink);
var foodBtn = document.getElementById("comida").addEventListener("click", displayFood);



var dropdownDrink = document.getElementById("myDropdownDrink");
var dropdownFood = document.getElementById("myDropdownFood");



var drinks = document.getElementById("drinks");
var food = document.getElementById("food");

/* ---- DISPLAY DRINK || FOOD ---- */

function displayDrink(){

    /* Dropdown Drinks || Food */
    dropdownDrink.style.display = "inline";
    dropdownFood.style.display = "none";

    /* Drinks || Food */
    drinks.style.display = "inline";
    food.style.display = "none";

} 

function displayFood(){
   
    /* Dropdown Drinks || Food */
    dropdownDrink.style.display = "none";
    dropdownFood.style.display = "inline";

    /* Drinks || Food */
    drinks.style.display = "none";
    food.style.display = "inline";
} 

/* ---- select DRINK ---- */

    


function getSelectValue(){
    var selectedValue = document.getElementById("myDropdownDrink").value;

    var cafés = document.getElementById("cafés");
    var chocolateQuente = document.getElementById("chocolateQuente");

    cafés.style.display = "none";
    chocolateQuente.style.display = "none";

    switch(selectedValue){
        case "todasAsBebidas": 
        cafés.style.display = "inline";
        chocolateQuente.style.display = "inline";

        break;
        case "cafés": 
        cafés.style.display = "inline";
        break;
        case "chocolateQuente": 
        chocolateQuente.style.display = "inline";
        break;
        /*case "shakes": 
        
        break;
    */
    }

}



/*

 function filter() {
    var keyword = document.getElementById("");
    var select = document.getElementById("myDropdown");

    for (var i = 0; i < select.length; i++) {
        var txt = select.options[i].text;
        if (!txt.match(keyword)) {
            $(select.options[i]).attr('disabled', 'disabled').hide();
        } else {
            $(select.options[i]).removeAttr('disabled').show();
        }

    }
}*/