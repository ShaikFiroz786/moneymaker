const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);




function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
}





function search_apps(){
    let input = document.getElementById('searchinput').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('content')
    for(i = 0;i<x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }
        else{
            x[i].style.display = "gallery"
        }
    }

}



function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "#2f4f4f		";
  } else {
    document.body.style.backgroundColor = "#2f4f4f";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




