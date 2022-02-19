
var drinkBtn = document.getElementById("bebida").addEventListener("click", displayDrink);
var foodBtn = document.getElementById("comida").addEventListener("click", displayFood);

var dropdownDrink = document.getElementById("myDropdownDrink");
var dropdownFood = document.getElementById("myDropdownFood");


function displayDrink(){
    dropdownDrink.style.display = "inline";
    dropdownFood.style.display = "none";
} 

function displayFood(){
    dropdownDrink.style.display = "none";
    dropdownFood.style.display = "inline";
    
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