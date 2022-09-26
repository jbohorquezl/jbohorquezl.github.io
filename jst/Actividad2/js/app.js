//Aplicacion para evaluar la fiebre de una persona
var temp;

//capturar datos de entrada
temp=parseFloat(prompt("Ingrese su temperatura en °C"));

//proceso para evaluar la fiebre
if (temp >=38 ) { 
    document.write('<b>', "La temperatura " +temp+ " °C indica fiebre <img src='img/termometro.png' alt='fiebre' height='25px'>");
    
} else {
    document.write('<b>',"La temperatura " +temp+ " °C indica paciente sin fiebre <img src='img/medico.png' alt='fiebre' height='25px'>");
    
}