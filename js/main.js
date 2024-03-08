const contenedorTarjetas = document.getElementById("productos-container");

/* Crea las tarjetas de productos teniendo en cuenta la lista en camisetas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaCamiseta = document.createElement("div");
    nuevaCamiseta.classList = "tarjeta-producto"
    nuevaCamiseta.innerHTML = `
    <img src="./assets/productos/${producto.id}.png" alt="Remeras 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaCamiseta);
    nuevaCamiseta.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(camisetas);