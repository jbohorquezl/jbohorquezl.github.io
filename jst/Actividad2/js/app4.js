//  Diseñe un algoritmo que ingrese la edad y diga si es MAYOR DE EDAD o MENOR DE EDAD.
var edad;

edad=parseInt(prompt("Ingrese su edad: "))

if (edad>=18) {
    document.write('<b>',"Usted es mayor de edad <img src='img/chico.png' alt='mayor' height='40px'>")
} else {
    document.write('<b>',"Usted es menor de edad <img src='img/menor-de-edad.png' alt='menor' height='40px'>")
}