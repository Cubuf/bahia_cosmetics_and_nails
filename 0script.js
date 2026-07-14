const categorias = {
  "1": "Cosméticos",
  "2": "Productos de uñas",
  "3": "Herramientas",
  "4": "Pinceles",
  "5": "Efectos",
  "6": "Rebajas"
}

async function cargar() {
  try {
    const respuesta = await fetch('base_datos.json')
    const productos = await respuesta.json()
    mostrar(productos)
  } catch (error) {
    console.error("Error cargando los productos:", error)
  }
}

let text = ""

function mostrar(lista) {
  const contenedor = document.getElementById("contenedor")
  contenedor.innerHTML = ''

  const filtrada = text === ""
    ? lista
    : lista.filter(p => p.nombre.toLowerCase().includes(text.toLowerCase()))

  filtrada.forEach(producto => {
    const card = document.createElement('div')
    card.classList.add("producto-card")

    const nombreCateg = categorias[producto.categoria] || "Sin categoría"

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h4>${producto.nombre}</h4>
      <p class="precio">Precio: ${producto.precio}</p>
      <p class="categ">${nombreCateg}</p>
    `
    contenedor.appendChild(card)
  })
}

cargar()

const barra = document.getElementById("barra")
barra.addEventListener("input", (e) => {
  text = e.target.value
  cargar()
})