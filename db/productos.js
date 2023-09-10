
export const productos = [
    {
        id: 1,
        modelo: "Maceta lisa",
        diseño: "Mandala",
        tamaño: "n°14",
        precio: 3000,
        imagen: "./img/14.jpeg",
    },
    {
        id: 2,
        modelo: "Maceta lisa",
        diseño: "Mandala",
        tamaño: "n°14",
        precio: 3000,
        imagen: "img/15.jpeg"
    },
    {
        id: 3,
        modelo: "Maceta lisa",
        diseño: "Diseño propio",
        tamaño: "n°14",
        precio: 3000,
        imagen: "img/4.jpeg"
    },
    {
        id: 4,
        modelo: "Maceta con borde",
        diseño: "Mandala",
        tamaño: "n°14",
        precio: 3500,
        imagen: "img/3.jpeg"
    },
    {
        id: 5,
        modelo: "Maceta con borde",
        diseño: "Diseño propio",
        tamaño: "n°14",
        precio: 3500,
        imagen: "img/5.jpeg"
    },
    {
        id: 6,
        modelo: "Maceta con borde",
        diseño: "Diseño propio",
        tamaño: "n°14",
        precio: 3500,
        imagen: "img/1.jpeg"
    },
    {
        id: 7,
        modelo: "Maceta con borde",
        diseño: "Diseño propio",
        tamaño: "n°14",
        precio: 3500,
        imagen: "img/18.jpeg"
    },
    {
        id: 8,
        modelo: "Maceta con borde",
        diseño: "Retrato",
        tamaño: "n°14",
        precio: 3500,
        imagen: "img/13.jpeg"
    },
    {
        id: 9,
        modelo: "Cuenco",
        diseño: "Diseño propio",
        tamaño: "n°14",
        precio: 2000,
        imagen: "img/19.jpeg"
    },
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));