// Cargar productos
async function cargar() {
    try {
        //Buscamos el archivo
        const respuesta = await fetch('base_datos.json')
        const producto = await respuesta.json()
        // Lo convertimos a objeto JS
    mostrar(producto)
    } catch (error) {
        console.error("Error cargando los productos:", error)
    }
}
// Funcion para pintar los productos en html
function mostrar(lista) {
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ''//limpiamos
    lista.forEach(producto => {
        //diseno de cada tarjeta
        const card = document.createElement('div')
        cargar.className = 'producto-card'
        card.classList.add("producto-card")
        card.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}"> <h3>${producto.nombre}</h3> <p>Precio: $${producto.precio}</p> <span class="${producto.disponible ? 'en-stock' : 'sin-stock'}">${producto.disponible}</span>`
    contenedor.appendChild(card)
    })
}
cargar()