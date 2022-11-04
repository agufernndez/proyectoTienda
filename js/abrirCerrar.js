console.log("JS funcionando")

// VENTANA SING UP DESDE EL MAIL. Si el shopping cart esta abierto, cerrarlo automaticamente.
let email = document.getElementById("email")
const desktopMenu = document.getElementById("desktopMenu")
const shoppingCart = document.getElementById("shoppingCart")

// como hacer para que si el widht de la pantalla es menos de 730px, se le agregue la clase "inactive" automaticamente???

email.onclick=()=> {
    const isShoppingCartClosed = shoppingCart.classList.contains("inactive")
    !isShoppingCartClosed ? shoppingCart.classList.add("inactive") : desktopMenu.classList.toggle("inactive");
}

// MOBILE MENU - Que aparezca y desaparezca cuando toco el iciono de toggle menu. Si el shopping cart está abierto, se cierra automaticamente.
const mobileMenu = document.getElementById("mobileMenu")
const toggleMenu = document.getElementById("toggleMenu")

toggleMenu.onclick =() => {
    const isShoppingCartClosed = shoppingCart.classList.contains("inactive");

    !isShoppingCartClosed ? (shoppingCart.classList.add("inactive"), mobileMenu.classList.toggle("inactive")) : mobileMenu.classList.toggle("inactive")
}


// SHOPPING CART - Que aparezca y desaparezca cuando clickeo el icono del carrito. Ademas, si el mobile menu y/o el email está abierto, se cierra en el mismo instante.
const shoppingCartIcon = document.getElementById("navBar-shoppingCart");

shoppingCartIcon.onclick = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    !isMobileMenuClosed ? (mobileMenu.classList.add("inactive") , shoppingCart.classList.toggle("inactive")) : shoppingCart.classList.toggle("inactive");


    // const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")
    // !isDesktopMenuClosed ? (desktopMenu.classList.add("inactive"), shoppingCart.classList.toggle("inactive")) : shoppingCart.classList.toggle("inactive");
}

// CERRAR EL CARRITO CUANDO APRIETO EL > QUE ESTA AL LADO DE MY ORDER
const closeMyOrderIcon = document.getElementById("closeMyOrder");
closeMyOrderIcon.onclick = () => {
    shoppingCart.classList.toggle("inactive");
}
