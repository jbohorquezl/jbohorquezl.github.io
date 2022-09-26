//Aplicacion para evaluar si un numero esta entre 10 y 100

var n;

n=parseInt(prompt("Digite el número entero: "))

if (n>=10 | n<=100) {
    document.write('<b>',"El numero " +n+ " esta entre 10 y 100 <img src='img/aceptar.png' alt='pósitivo' height='25px'>")
} else {
    document.write('<b>',"El numero " +n+ " no esta entre 10 y 100 <img src='img/cancelar.png' alt='negativo' height='25px'>")
}
