console.log("JS funcionando")

let email = document.getElementById("email")
let desktopMenu = document.getElementById("desktopMenu")

email.onclick=()=> {
    desktopMenu.classList.toggle("inactive")
}

// MOBILE MENU - Que aparezca y desaparezca cuando toco el iciono de toggle menu.
const mobileMenu = document.getElementById("mobileMenu")
const toggleMenu = document.getElementById("toggleMenu")

toggleMenu.onclick =() => {
    mobileMenu.classList.toggle("inactive")
}