console.log("JS funcionando")

// VENTANA SING UP DESDE EL MAIL. Si el shopping cart esta abierto, cerrarlo automaticamente.
const email = document.getElementById("email")
const desktopMenu = document.getElementById("desktopMenu")
const isEmailClosed = email.classList.contains("inactive")

email.onclick=()=> {
    const isShoppingCartClosed = shoppingCart.classList.contains("inactive")
    if(!isShoppingCartClosed){
        shoppingCart.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}
// como hacer para poner que si es menos de 730px de pantalla, que no aparezca???




// MOBILE MENU - Que aparezca y desaparezca cuando toco el iciono de toggle menu. Si el shopping cart está abierto, se cierra automaticamente.
const mobileMenu = document.getElementById("mobileMenu")
const toggleMenu = document.getElementById("toggleMenu")



toggleMenu.onclick =() => {
    const isShoppingCartClosed = shoppingCart.classList.contains("inactive");

    if (!isShoppingCartClosed){
        shoppingCart.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")

}


// SHOPPING CART - Que aparezca y desaparezca cuando clickeo el icono del carrito. Ademas, si el mobile menu está abierto, se cierra en el mismo instante.
const shoppingCartIcon = document.getElementById("navBar-shoppingCart");
const shoppingCart = document.getElementById("shoppingCart")

shoppingCartIcon.onclick = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    shoppingCart.classList.toggle("inactive")
}
