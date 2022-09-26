//Función que sume dos números

function sumar() {
    var x,y,suma;
    x=parseInt(document.getElementById("n1").value)
    y=parseInt(document.getElementById("n2").value)
    
    suma=parseInt(x)+parseInt(y);
    document.getElementById("resultado").innerHTML = "La suma es: "+suma
    
}