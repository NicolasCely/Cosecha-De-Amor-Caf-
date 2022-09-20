let productos =[]
const selectTag = document.getElementById('lista') 

//objetos que se guardan en el arreglo 'productos'
const cafe = {
    nombre: 'Libra de cáfe',
    Precio: 25000
}
productos.push(cafe)

const mediacafe = {
    nombre: '1/2 Libra de cáfe',
    Precio: 15000
}
productos.push(mediacafe)

const prensaPlastico = {
    nombre: 'Prensa francesa de plástico',
    Precio: 25000
}
productos.push(prensaPlastico)

const prensaMadera = {
    nombre: 'Prensa francesa de madera',
    Precio: 55000
}
productos.push(prensaMadera)

const aeroepress = {
    nombre: 'Aeropress',
    Precio: 110000
}
productos.push(aeroepress)

const syphon = {
    nombre: 'Syphon Japonesa',
    Precio: 165000
}
productos.push(syphon)

const V60A = {
    nombre: 'V60 en acrilico',
    Precio: 30000
}
productos.push(V60A)

const V60C = {
    nombre: 'V60 en cerámica',
    Precio: 50000
}
productos.push(V60C)

const molino = {
    nombre: 'Molino de acero',
    Precio: 60000
}
productos.push(molino)

const jarra = {
    nombre: 'Jarra Kettle',
    Precio: 85000
}
productos.push(jarra)

//Se agregan los elementos del arreglo producto al select
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

//Evento para guardar el producto comprado en el arreglo carrito
boton.onclick = ()=>{
    const productoSeleccionado = productos[selectTag.selectedIndex]
    carrito.push(productoSeleccionado)
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

