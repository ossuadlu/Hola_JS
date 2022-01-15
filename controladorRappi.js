// entradas
let nombreCliente="Pedro Perez"
let direccionCliente="carrera 57 # 69-27"
let telefonoCliente="3146140261"
let metodoPagoCliente="efectivo"

let nombreRepartidor="Carlos Tavera"
let numeroIdentificacionRepartidor="52305353"
let ubicacionRepartidor=" u nicentro carrera 65 # 85-20"

let nombreTienda=" los postres de doña chechi S.A.S"
let nombreProducto=" postre de tiramizu"
let precioUnitarioProducto=40000
let cantidadProducto=2

const IVA=0.19

const tieneDescuento=true

//proceso para calcular el costo del envio
let valorNeto=precioUnitarioProducto*cantidadProducto
let valorIVA=valorNeto*IVA
let valorImpuesto=valorNeto+valorIVA
let valorTotal=valorImpuesto-10000

// salidas

console.log(".................................")
console.log(".............Rappi...............")
console.log(".................................")
console.log(`nombre del producto ${nombreProducto}`)
console.log(`precio unitario : ${precioUnitarioProducto}`)
console.log(`cantidad de productos : ${cantidadProducto}`)
console.log(`valor iva ${IVA}`)
console.log(`precio total ${valorTotal}`)






