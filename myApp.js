var body = document.getElementsByTagName("body");




function myFunction(mobile) {
  if (mobile.matches ) { // If media query matches
    console.log("Good");
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var mobile = window.matchMedia("(max-width: 700px)")
myFunction(mobile) // Call listener function at run time
mobile.addListener(myFunction) // Attach listener function on state changes