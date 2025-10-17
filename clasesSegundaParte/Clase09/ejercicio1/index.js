function rectangulo(ancho, altura){
    let area = ancho * altura
    return area
}
let areaR = rectangulo(3, 3)
console.log(areaR)



function triangulo(base, altura){
    let area = (base * altura) /2
    return area
}
let areaT = triangulo(2, 2)
console.log(areaT)



function dolarHoy(pesosArg){
    let dolar = pesosArg / 1300
    return dolar
}
let dolar = dolarHoy(4000000)
console.log(dolar)



function precioFinal(precio){
    let conIVA = precio + (precio * 0.21)
    return conIVA
}
let precioConIVA = precioFinal(100)
console.log(precioConIVA)



function mitad(numero){
    let medio = numero / 2
    return medio
}
let media = mitad(10)
console.log(media)