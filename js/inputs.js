let inputs = document.getElementsByClassName("input")
console.log(inputs)
console.log("js de inputs");


// for (const input of inputs) {
//     document.getElementsByClassName("input").onclick = () => {
//         input.classList.add("fondoVerde")
//     }
// }


// inputs.forEach(input => {
//     console.log("Js de inputs funcionando");
//     document.getElementsByClassName("input").onclick = () => {
//         input.classList.add("fondoVerde")
//     }
    
// });

// ESTO FUNCIONA PERO NO SE PONE EL COLOR DEL FONDO NI DEL BORDE
let password = document.getElementById("password2")
password.onfocus=()=> {
    password.classList.add("fondoVerde");
    console.log("focus en el input")
}
