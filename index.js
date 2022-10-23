const productos = []
let carrito = []

class Producto{
    constructor(id, nombre, precio, img, description){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.description = description
    }
    desplegarProductos(){
        const tarjeta = 
        `<div class="col">
          <div class="card">
            <div class="card-body">
                <h5 class="card-title">${this.nombre}</h5>
                <p class="card-text">${this.description}</p>
            </div>
            <img src="${this.img}" class="card-img-top" alt="Foto del Producto" height="450px">
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
let prod1 = new Producto('01', 'Libra de café', 25000, './fotos/Lb de café.jpeg', 'Una libra de café de Jerico Antioquia, cultivado a 1950 msnm con un perfil a lima, almendras y caramelo.')
let prod2 = new Producto('02','1/2 Libra de café',15000, './fotos/Lb de café.jpeg', 'Media libra de café de Jerico Antioquia, cultivado a 1950 msnm con un perfil a lima, almendras y caramelo.')
let prod3 = new Producto('03','Prensa francesa de plástico', 25000, './fotos/Prensa de plástico.webp', 'Prensa francesa de marco plástico y filtro de acero inoxidable.')
let prod4 = new Producto('04','Prensa francesa de madera', 55000, './fotos/Prensa de madera.webp', 'Prensa francesa de madera bamboo y filtro de acero inoxidable.')
let prod5 = new Producto('05','Aeropress', 110000, './fotos/Aeropress.jpg', 'Prepara tu café en casa, con elegancia, con estilo, pero sobre todo con sabor.')
let prod6 = new Producto('06','Syphon Japonesa', 165000, 'fotos/Syphon.jpg', 'Nosotros ponemos el método y el café, y tu le pones el toque secreto, el amor.')
let prod7 = new Producto('07','V60 en acrilico', 30000, './fotos/V60 acrilico.webp', 'V60: llamado así por su cono de 60°, la preparación se realizando mediante goteo en forma concéntrica, experimenta un café con una excelente consistencia y un perfil limpio.')
let prod8 = new Producto('08','V60 en cerámica', 50000, './fotos/V60 en ceramica.webp', 'Como el V60 viene en 4 materiales diferentes, tenga en cuenta el material que va a precalentar. Se necesita más tiempo para calentar el modelo de cerámica que las ediciones de acero inoxidable, vidrio, plástico o cobre.')
let prod9 = new Producto('09','Molino de acero', 60000, 'fotos/Molino.jpg', 'Nuestra molinillo de café manual es no sólo lo suficientemente pequeño como para caber en un bolso de mano, pero se puede desmontar para ahorrar espacio a medida que viajan en cualquier lugar.')
let prod10 = new Producto('10','Jarra Kettle', 85000, 'fotos/Jarra Kettle.jpg', 'Esta cafetera fue inventada el 2005 en Estados Unidos, donde se buscaba imitar el funcionamiento de las clásica prensas francesas, pero de una manera práctica y fácil de transportar.')

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

    Toastify({
        text:`Se agregó ${producto.nombre} al carrito`
    }).showToast()

    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
 }

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)


//Evento para calcular el precio total de la compra

const boton = document.createElement('button')
boton.innerText = 'Terminar compra'
document.body.append(boton)

boton.onclick = ()=>{
    let totalCompra = 0
    carrito.forEach((prod)=>{

        totalCompra = totalCompra + (prod.precio*prod.cantidad)

        Toastify({
            text:`El precio total es: ${totalCompra}`
        }).showToast() 
    }
    )
    } 




    