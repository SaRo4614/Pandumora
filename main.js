import { comprarProducto } from "./carrito.js"; 

const diseños = document.getElementById("diseños");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
  generarCardsProductos(productosDisponibles)
})

const generarCardsProductos = (productos) => {

    productos.forEach((producto) => {

      const { imagen, diseño, modelo, precio, id } = producto;

        let card = document.createElement("div")

        card.className = "productos";
        card.innerHTML = `
         <div class="card">
         <img class="card-img-top" src="${imagen}" alt="Card image">
         <div class="card-body">
           <p class="card-title">${diseño}</p>
           <p class="card-text">${modelo}</p>
           <p class="card-text">$ ${precio}</p>
           <button id="btn${id}" class="btn btn-primary">Añadir al carrito</button>
         </div>
         </div>
        `
        diseños.appendChild(card);

        const btncomprar = document.getElementById(`btn${id}`)
        btncomprar.addEventListener("click", () => comprarProducto(id))
    });
};



