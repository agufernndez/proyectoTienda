console.log("JS funcionando")

// VENTANA SING UP DESDE EL MAIL
const email = document.getElementById("email")
const desktopMenu = document.getElementById("desktopMenu")

email.onclick=()=> {
    desktopMenu.classList.toggle("inactive")
}

// MOBILE MENU - Que aparezca y desaparezca cuando toco el iciono de toggle menu.
const mobileMenu = document.getElementById("mobileMenu")
const toggleMenu = document.getElementById("toggleMenu")

toggleMenu.onclick =() => {
    mobileMenu.classList.toggle("inactive")
}

// SHOPPING CART - Que aparezca y desaparezca cuando clickeo el icono del carrito
const shoppingCartIcon = document.getElementById("navBar-shoppingCart");
const shoppingCart = document.getElementById("shoppingCart")

shoppingCartIcon.onclick = () => {
    shoppingCart.classList.toggle("inactive")
    console.log("que desaparezca el cart")
}







// const navBar__shoppingCart = document.getElementById("navBar-shoppingCart")
// const shoppingCart = document.getElementById("shoppingCart")

// navBar__shoppingCart.onclick = () => {
//     shoppingCart.classList.toggle("inactive");
// }