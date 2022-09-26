//Diseñe un algoritmo que ingrese un valor de ingreso y un valor de gastos; Si el ingreso es mayor al gasto es GANANCIA sino es PERDIDA.
ingresos=parseFloat(prompt("REGISTRE AQUI LOS INGRESOS QUE GENERA"));
gastos=parseFloat(prompt("INGRESE EL VALOR DE LOS GASTOS"));

if (ingresos>gastos) {
    document.write('<b>', "Su empresa a generado ganancias <img src='img/ganancias.png' alt='mayor' height='40px'>")
} else {
    document.write('<b>',"Su empresa a generado perdidas <img src='img/perdida-de-dinero.png' alt='mayor' height='40px'>")
}