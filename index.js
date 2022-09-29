const productos = []
let carrito = []

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
    desplegarProductos(){
        const tarjeta = 
        `<div class="col">
          <div class="card">
            <div class="card-body">
                <h5 class="card-title">${this.nombre}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <img src="${this.img}" class="card-img-top" alt="Foto del Producto" height="400px">
            <h5 class="card-title">$${this.precio}</h5>
            <div class="btn-container">
              <button id=${this.id} class="btnAgregar">Agregar al carrito</button>
            </div>
          </div>
         </div>`
        const container = document.getElementById('container')
        container.innerHTML += tarjeta
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => AgregarAlCarrito(productoEncontrado))
    }
    }



//objetos que se guardan en el arreglo 'productos'
let prod1 = new Producto('01', 'Libra de café', 25000, './fotos/Lb de café.jpeg')
let prod2 = new Producto('02','1/2 Libra de café',15000, './fotos/Lb de café.jpeg')
let prod3 = new Producto('03','Prensa francesa de plástico', 25000, './fotos/Logo3.jpeg')
let prod4 = new Producto('04','Prensa francesa de madera', 55000, './fotos/logo1.jpeg')
let prod5 = new Producto('05','Aeropress', 110000, './fotos/Aeropress.jpg')
let prod6 = new Producto('06','Syphon Japonesa', 165000, 'fotos/Syphon.jpg')
let prod7 = new Producto('07','V60 en acrilico', 30000, './fotos/logo1.jpeg')
let prod8 = new Producto('08','V60 en cerámica', 50000, './fotos/logo2.jpeg')
let prod9 = new Producto('09','Molino de acero', 60000, 'fotos/Molino.jpg')
let prod10 = new Producto('10','Jarra Kettle', 85000, 'fotos/Jarra Kettle.jpg')

productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10)

console.log(productos)

productos.forEach(e => {
   e.desplegarProductos()
}
)
productos.forEach(e => {
    e.agregarEvento()
 }
 )

 function AgregarAlCarrito(producto){
    const enCarrito = carrito.find(prod => prod.id == producto.id)

    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
    }
    else {
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            {...carritoFiltrado, ...enCarrito, cantidad: enCarrito.cantidad +1}
        ]
    }
    alert (`Se agregó ${producto.nombre} al carrito`)
 }


//Evento para calcular el precio total de la compra
const boton = document.createElement('button')
boton.innerText = 'Terminar compra'
document.body.append(boton)

boton.onclick = ()=>{
    let totalCompra = 0
    carrito.forEach((prod)=>{
        totalCompra = totalCompra + prod.precio
        Swal.fire('El precio total es: ${totalCompra}')
    }
    )
    }


//alert (`El precio total es ${totalCompra}`)}

    