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
    contenedor.innerHTML = ''//limpiamosS
    lista.forEach(producto => {
        //diseno de cada tarjeta
        console.log(producto.categoria)
        if (producto.categoria == 5){
        const card = document.createElement('div')
        cargar.className = 'producto-card'
        card.classList.add("producto-card")
        card.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100%; height: auto;"> <h4>${producto.nombre}</h4> <p style="font-size:70%;">Precio: $${producto.precio}</p>`
    contenedor.appendChild(card) }
    })
}
cargar()