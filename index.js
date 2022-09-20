const selectTag = document.getElementById('lista') 

//objetos que se guardan en el arreglo 'productos'
let productos =[{
    nombre: 'Libra de cáfe',
    Precio: 25000},
    {
        nombre: '1/2 Libra de cáfe',
        Precio: 15000
    },
    {
        nombre: 'Prensa francesa de plástico',
        Precio: 25000
    },
    {
        nombre: 'Prensa francesa de madera',
        Precio: 55000
    },
    {
        nombre: 'Aeropress',
        Precio: 110000
    },
    {
        nombre: 'Syphon Japonesa',
        Precio: 165000
    },
    {
        nombre: 'V60 en acrilico',
        Precio: 30000
    },
    {
        nombre: 'V60 en cerámica',
        Precio: 50000
    },
    {
        nombre: 'Molino de acero',
        Precio: 60000
    },
    {
        nombre: 'Jarra Kettle',
        Precio: 85000
    }
]

//Se agregan los elementos del arreglo productos al select
productos.forEach(producto=>{
    const option = document.createElement('option')
    option.innerText = `${producto.nombre}: $${producto.Precio} `
    selectTag.append(option)
})

//Eventos
const boton = document.createElement('button')
boton.innerText = 'COMPRAR'
document.body.append(boton)

const boton2 = document.createElement('button')
boton2.innerText = 'TERMINAR COMPRA'
document.body.append(boton2)

let carrito = []

//Evento para guardar el producto comprado en el arreglo carrito y mostrarlo en un párrafo
boton.onclick = ()=>{
    const productoSeleccionado = productos[selectTag.selectedIndex]
    carrito.push(productoSeleccionado)
    const p = document.createElement('p')
    p.innerText = `${productoSeleccionado.nombre}: $${productoSeleccionado.Precio}`
    document.body.append(p)
}

//Evento para calcular el precio total de la compra
boton2.onclick = ()=>{
    let totalCompra = 0
    carrito.forEach((prod)=>{
        totalCompra = totalCompra + prod.Precio
    }
    )
    alert (`El precio total es ${totalCompra}`)
}

