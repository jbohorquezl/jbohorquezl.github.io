// Diseñe un algoritmo que muestre un menú donde las opciones sean:
// 1. Suma
// 2. Resta
// 3. Multiplicacion
// 4. División
// 5. Potenciación

var op;
var n1,n2,resultado;

op=parseInt(prompt("<---- Calculadora Versión 1.0 Beta ->\n Escoja una opción del menú: \n 1. suma \n 2. Resta \n 3. Multiplicación \n 4. División"))
switch (op) {
    case 1:
        n1=parseInt(prompt("Digite el primer número"))
        n2=parseInt(prompt("Digite el segundo número"))
        resultado=n1+n2;
        document.write("La Suma de " +n1+ " + " +n2+ " = " +resultado)
        
    break;

    case 2: 
        n1=parseInt(prompt("Digite el primer número"))
        n2=parseInt(prompt("Digite el segundo número"))
        resultado=n1-n2;
        document.write("La Resta de " +n1+ " - " +n2+ " = " +resultado)     
    break;

    case 3:
        n1=parseInt(prompt("Digite el primer número"))
        n2=parseInt(prompt("Digite el segundo número"))
        resultado=n1*n2;
        document.write("La Multiplicación de " +n1+ " * " +n2+ " = " +resultado)
        
    break;

    case 4:
        n1=parseFloat(prompt("Digite el primer número"))
        n2=parseFloat(prompt("Digite el segundo número"))
        resultado=n1/n2;
        document.write("La División de " +n1+ " / " +n2+ " = " +resultado)
        
    break;

    default:
        document.write("Seleccione una opción del menú (1-4)", '<br>', "Click en actualizar pagina")
        break;
}