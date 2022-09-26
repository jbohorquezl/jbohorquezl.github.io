//  Diseñe un algoritmo que ingrese un número entero e imprima si es POSITIVO o NEGATIVO.
var num;

num=parseInt(prompt("Ingrese el numero entero:"))

if (num>0) {
    document.write('<b>',"El número " +num+ " es positivo <img src='img/aceptar.png' alt='pósitivo' height='25px'>")
} else {
    document.write('<b>',"El número " +num+ " es negativo <img src='img/cancelar.png' alt='negativo' height='25px'>")
}