// array de objetos
const productos = [
    {
        id: 1,
        img: "../assets/img/armchair2.jpg",
        nombre: "Green Armchair",
        precio: 190,
    },
    {
        id: 2,
        img: "../assets/img/armchair.jpg",
        nombre: "Gray Armchair",
        precio: 180,
    },
    {
        id: 3,
        img: "../assets/img/armchair3.jpg",
        nombre: "Pink Armchair",
        precio: 120,
    },
    {
        id: 4,
        img: "../assets/img/audio.jpg",
        nombre: "Gramophore",
        precio: 140,
    },
    {
        id: 5,
        img: "../assets/img/bike.jpg",
        nombre: "Bike",
        precio: 120,
    },
    {
        id: 6,
        img: "../assets/img/lamp.jpg",
        nombre: "Lamp",
        precio: 120,
    },
    {
        id: 7,
        img: "../assets/img/oldArmchair.jpg",
        nombre: "Old Armchair",
        precio: 130,
    },
    {
        id: 8,
        img: "../assets/img/vintageWardrobe.jpg",
        nombre: "Old War",
        precio: 170
    },
    {
        id: 9,
        img: "../assets/img/armchair2.jpg",
        nombre: "Green Armchair",
        precio: 190
    },
    {
        id: 10,
        img: "../assets/img/armchair.jpg",
        nombre: "Gray Armchair",
        precio: 180
    },
    {
        id: 11,
        img: "../assets/img/armchair3.jpg",
        nombre: "Pink Armchair",
        precio: 120
    },
    {
        id: 12,
        img: "../assets/img/audio.jpg",
        nombre: "Gramophore",
        precio: 140
    },
    {
        id: 13,
        img: "../assets/img/bike.jpg",
        nombre: "Bike",
        precio: 120
    },
    {
        id: 14,
        img: "../assets/img/lamp.jpg",
        nombre: "Lamp",
        precio: 120
    },
    {
        id: 15,
        img: "../assets/img/oldArmchair.jpg",
        nombre: "Old Armchair",
        precio: 130
    },
    {
        id: 16,
        img: "../assets/img/vintageWardrobe.jpg",
        nombre: "Old War",
        precio: 170
    }
    

];

let carrito = []
// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// guardar carrito en el storage
let carritoJSON = JSON.stringify(carrito)
console.log("carrito JSON:" +carritoJSON);



// let carrito;
// if (localStorage.getItem("carrito")!=null){
//     carrito = localStorage.setItem("carrito", JSON.parse(carrito));
//     document.getElementById("productosCarrito").innerHTML += `
//             <article class="card" id="productoNombre${producto.id}">
//                         <figure >
//                             <img src="${producto.img}" alt="imagen producto">
//                             <p>${producto.nombre}</p>
//                         </figure>
//                         <div>
//                             <p>$${producto.precio}</p>
//                             <img src="../assets/icons/icon_close.png" alt="" id="eliminarProducto${producto.id}">
//                         </div>
//                     </article>
//                 `

// } else {
//     carrito = []
// }
const total = [];


// se renderiza cada objeto del array de productos dentro de la section con el id "cards-container"
const cardsContainer = document.getElementById("cards-container");
const renderizarProductos = () => {
    productos.forEach((producto) => {
        cardsContainer.innerHTML += `
        <article class="card1-container" >
                <img src="${producto.img}" alt="imagen producto">
                <div class="card1-container__descript">
                    <div class="card1-container__descript-info">
                        <p>$${producto.precio}</p>
                        <p>${producto.nombre}</p>
                    </div>
                    <figure>
                        <img src="../assets/icons/bt_add_to_cart.svg" alt="add logo" id="botonAgregarCart${producto.id}">
                    </figure>
                </div>
            </article>
        `
    });
}
renderizarProductos()

// console.log(cardsContainer.innerHTML);

// seleccionar producto apretando el icono de "botonAgregarCart" y agregarlo en "productosCarrito". TAMBIÉN ir sumando el valor de cada producto para al final ponerlo con inner.html en "sectionTotal"

// const botonAgregarCart = document.getElementById(`botonAgregarCart${producto.id}`); NO FUNCIONA HACERLO AFUERA Y ADENTRO PONER "botonAgregarCart.onclick "

const agregarAlCarrito = () => {
    productos.forEach(producto => {
        document.getElementById(`botonAgregarCart${producto.id}`).onclick = () => {
            carrito.push(producto);
            console.log("agregue un producto al carrito");
            for (let i=0; i < carrito.length ; i++){
                console.log("Cantidad de productos en el carrito: "+(i+1));
                document.getElementById("shoppingCart-counter").innerHTML = `<p>${i+1}</p>`
            }
            document.getElementById("productosCarrito").innerHTML += `
            <article class="card" id="productoNombre${producto.id}">
                        <figure >
                            <img src="${producto.img}" alt="imagen producto">
                            <p>${producto.nombre}</p>
                        </figure>
                        <div>
                            <p>$${producto.precio}</p>
                            <img src="../assets/icons/icon_close.png" alt="" id="eliminarProducto${producto.id}">
                        </div>
                    </article>
                `
            localStorage.setItem("carrito", JSON.stringify(carrito))


            // ACA SUMA EL TOTAL  y que aparezca en el p id="sectionTotal"

            // 1ro: tomar el precio de CADA producto (armar un array)
            // 2do: hacer una suma de todos los precios, guardarlo en una variable
            // 3ro: mostrar el valor de esa variable por p
            total.push(producto.precio);
            console.log(total);

            let sumaTotal = 0;
            for (let i=0; i<total.length ; i++) {
                sumaTotal += total[i];
            }
            
            console.log("El total es: "+sumaTotal);
            document.getElementById("sectionTotal").innerHTML = 
            `<p>Total: </p>
            <p id="totalCarrito">$${sumaTotal}</p>
            `
        }
        
    });
}
agregarAlCarrito();








// AYUDAAAAAAAAAA

// eliminar productos del carrito cuando se aprieta la imagen de la flecha

// const eliminarProducto = () => {
//     productos.forEach(producto => {
//         document.getElementById(`eliminarProducto${producto.id}`).onclick = () => {
//             // COMO ELIMINAR ESE PRODUCTO????????
//         }
        
//     });
// }
// eliminarProducto()


// 1 saber el indice del elemento con su id
                // let indiceProductoEminar = productos.indexOf(`eliminarProducto${producto.id}`)

// 2do uso el metodo splice = carrito.splice(indiceProductoEminar,1)


