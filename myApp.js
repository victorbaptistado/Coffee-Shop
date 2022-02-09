var body = document.getElementsByTagName("body");




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