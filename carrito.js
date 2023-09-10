import { productosDisponibles } from "./main.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded", () => {
    dibujarCarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))
const listaCarrito = document.getElementById("items")
const footCarrito = document.getElementById("totales")
const btnCarrito = document.getElementById("btnCarrito")
const carritoTable = document.getElementById("carrito")

btnCarrito.addEventListener("click", () => {
    dibujarCarrito()
    if(carritoTable.style.display === "block") {
        carritoTable.style.display = "none"
    }else{
        carritoTable.style.display = "block"
    }
});

export const comprarProducto = (idProducto) => {
    
    const producto = productosDisponibles.find((producto) => producto.id === idProducto)

    const { imagen, modelo, precio, id } = producto

    const productoCarrito = carrito.find((producto) => producto.id === idProducto)

    if(productoCarrito === undefined) {
        const nuevoProductoCarrito = {
            id: id,
            modelo: modelo,
            imagen: imagen,
            precio: precio,
            cantidad: 1
        }
    
    carrito.push(nuevoProductoCarrito)

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }else {
        const indexProductoCarrito = carrito.findIndex((producto) => producto.id === idProducto)

        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad
        
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))

    Toastify({

        text: "¡Producto añadido al carrito!",
        duration: 3000,
        gravity: "top",
        className: "toastify",
        }).showToast();

    console.log(carrito);
    dibujarCarrito()
};

const dibujarCarrito = () => {

    listaCarrito.innerHTML = ''
    carrito.forEach(producto => {

        const { imagen, precio, id, cantidad } = producto
        
        let body = document.createElement("tr")

        body.className = "producto__carrito"

        body.innerHTML = `
        <th><img id="fotoProductoCarrito" src="${imagen}" class="img-carrito"</th>
        <hr>
        <td class="info-carrito">$ ${precio / cantidad}</td>
        <td class="info-carrito">$ ${precio}</td>
        <td class="info-carrito">${cantidad}</td>
        <td>
            <button id="+${id}" class="btn btn-success">+</button>
            <button id="-${id}" class="btn btn-danger">-</button>
        </td>
        `

        listaCarrito.append(body)
        
        const btnAgregar = document.getElementById(`+${id}`)
        const btnRestar = document.getElementById(`-${id}`)

        btnAgregar.addEventListener("click", () => aumentarCantidad(id))
        btnRestar.addEventListener("click", () => restarCantidad(id))
    });

    dibujarFooter()
}

const dibujarFooter = () => {

    if(carrito.length > 0) {
        footCarrito.innerHTML = ""

        let footer = document.createElement("tr")

        footer.innerHTML = `
        <th><b>Total: $ ${generarTotales().costoTotal}</b></th>
        
        `

        footCarrito.append(footer)
    }else {
        footCarrito.innerHTML = "<p>No hay productos en el carrito</p>"
    }
}

const generarTotales = () => {
    const costoTotal = carrito.reduce((total, { precio }) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total, { cantidad }) => total + cantidad, 0)

    return {
        costoTotal: costoTotal,
        cantidadTotal: cantidadTotal
    }
}

const aumentarCantidad = (id) => {
    
    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad++
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()
}

const restarCantidad = (id) => {

    const indexProductoCarrito = carrito.findIndex((producto) => producto.id === id)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio*carrito[indexProductoCarrito].cantidad

    if(carrito[indexProductoCarrito].cantidad === 0) {
        carrito.splice(indexProductoCarrito, 1)
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito))
    dibujarCarrito()
}