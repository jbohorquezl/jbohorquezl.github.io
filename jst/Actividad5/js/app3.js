//Desarrolle una Aplicación utilizando el ciclo For(Para) que permita ingresar por pantalla el valor inicial y el valor final, y me muestre los numeros pares que ay entre ellos

var a,b;
var i;

a=parseFloat(prompt("Ingresa el valor inicial"))
b=parseFloat(prompt("Ingresa el valor final"))

for (i=a;i<=b;i++){
    if (i%2==0) {
        document.write( i+"&nbsp")
        
    }  
    
}

