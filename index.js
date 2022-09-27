const productos = []
const carrito = []

class Producto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
    desplegarProductos(){
        const tarjeta = 
        `<div class="card" style="width: 18rem;>
        <div class="card-body">
          <h5>${this.nombre}</h5>
          <p>${this.precio}</p>
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
let prod1 = new Producto('01', 'Libra de cáfe', 25000)
let prod2 = new Producto('02','1/2 Libra de cáfe',15000)
let prod3 = new Producto('03','Prensa francesa de plástico', 25000)
let prod4 = new Producto('04','Prensa francesa de madera', 55000)
let prod5 = new Producto('05','Aeropress', 110000)
let prod6 = new Producto('06','Syphon Japonesa', 165000)
let prod7 = new Producto('07','V60 en acrilico', 30000)
let prod8 = new Producto('08','V60 en cerámica', 50000)
let prod9 = new Producto('09','Molino de acero', 60000)
let prod10 = new Producto('10','Jarra Kettle', 85000)

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
    console.log(producto)
 }






/*Evento para calcular el precio total de la compra
    boton2.onclick = ()=>{
    let totalCompra = 0
    carrito.forEach((prod)=>{
        totalCompra = totalCompra + prod.Precio
    }
    )
    alert (`El precio total es ${totalCompra}`)} */

