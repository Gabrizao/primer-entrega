1
const opc1 = 32000
const opc2 = 40000
const opc3 = 50000

let producto = 0
let selProd = prompt("BIENVENIDO A GI HOME STUDIO, que te interesaria grabar?:\n 1-Grabar Voces \n 2-Grabar Instrumentos \n 3-Grabar Banda Completa")

if(selProd == 1){
    producto = opc1
}
else if(selProd == 2){
    producto = opc2
}
else if(selProd == 3){
    producto = opc3
}else{
    alert("Opcion no encontrada")
}


const suma = (a, b) => a + b
const resta = (a, b) => a - b
const iva = x => x * 0.21
let precioProducto = producto
let descuento = producto * 10 / 100

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
let preSinDesc = suma(producto, iva(producto))

alert("precio de lista: " + preSinDesc + "\ndescuento: -" + descuento + "\nprecio final con iva: " + nuevoPrecio )

let Cuotas = prompt("seleccione cantidad de cuotas:\n 1- 1 pago s/int \n 2- 2 pago s/int ")
if(Cuotas == 1){
    cantCuot = nuevoPrecio / 1
}
else if(Cuotas == 2){
    cantCuot = nuevoPrecio / 2
}else{
    alert("Cuotas no seleccionadas")
}

alert("El valor de la cuota es :" + cantCuot)
alert("Gracias por pasar por nuestro estudio")