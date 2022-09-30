// CREACIÓN DE OBJETOS
class Producto {
    constructor (img, nombre, precio){
        this.img = img;
        this.nombre = nombre;
        this.precio= precio
    }
}

const productos = [];

const greenArmchair = new Producto (assets/img/armchair2.jpg, "Green Armchair", 190);
const grayArmchair = new Producto (assets/img/armchair.jpg, "Gray Armchair", 180);
