//Funcion que resta dos numeros

function sumar() {
    var x,y,suma;
    x=parseInt(document.getElementById("n1").value)
    y=parseInt(document.getElementById("n2").value)
    
    suma=parseInt(x)+parseInt(y);
    document.getElementById("resultado_suma").innerHTML = "La suma es: "+suma
    
}

//Funcion que resta dos numeros

function restar() {
    var x,y,resta;
    x=parseInt(document.getElementById("n1").value)
    y=parseInt(document.getElementById("n2").value)
    
    resta=parseInt(x)-parseInt(y);
    document.getElementById("resultado_resta").innerHTML = "La resta es: "+resta
    
}

//Funcion que multiplica dos numeros

function multiplicar() {
    var x,y,multiplicacion;
    x=parseInt(document.getElementById("n1").value)
    y=parseInt(document.getElementById("n2").value)
    
    multiplicacion=parseInt(x)*parseInt(y);
    document.getElementById("resultado_multiplicar").innerHTML = "La multiplicación es: "+multiplicacion
    
}

//Funcion que multiplica dos numeros

function dividir() {
    var x,y,division;
    x=parseInt(document.getElementById("n1").value)
    y=parseInt(document.getElementById("n2").value)
    
    division=parseFloat(x)/parseFloat(y);
    document.getElementById("resultado_dividir").innerHTML = "La División es: "+division
    
}