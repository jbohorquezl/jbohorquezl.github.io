var peso,estatura,imc;

peso=parseFloat(prompt("Ingrese el peso en Kilogramos"))
estatura=parseFloat(prompt("Ingrese la estatura en Metros"))

imc=peso/(estatura*estatura);

if (imc<18.5){
    document.write("El IMC es ",+imc+ " <br><br>  <p style='color: #E7A25E';>Esta en Bajo Peso <img src='img/bajo-peso.png' alt='bp' width='25px' height='25px'></p>")
} else if (imc>= 18.5 && imc<=24.9){
    document.write("El IMC es ",+imc+ " <br><br>  <p style='color: #92CF4F';>Esta en Peso Normal <img src='img/normal.png' alt='bp' width='25px' height='25px'></p>")
} else if (imc>=25 && imc<=29.9){
    document.write("El IMC es ",+imc+ " <br><br> <p style='color: #E76B08';>Esta en Sobre Peso <img src='img/sobrepeso.png' alt='bp' width='35px' height='35px'></p>")
} else if (imc>=30 && imc<=34.9){
    document.write("El IMC es ",+imc+ " <br><br>  <p style='color: #E51413';><big>Esta en Obesidad I <img src='img/obesidad1.png' alt='bp' width='25px' height='25px'></big></p>")
} else if (imc>=35 && imc<=39.9){
    document.write("El IMC es ",+imc+ "<br> <p style='color: #DD1510';><big>Esta en Obesidad II <img src='img/obesidad2.png' alt='bp' width='25px' height='25px'></big></p>")
} else if (imc>=40 && imc<=49.9){
    document.write("El IMC es ",+imc+ "  <br><br>  <p style='color: #BB0202';><big>Esta en Obesidad III <img src='img/obesidad3.png' alt='bp' width='25px' height='25px'></big></p>")
} else if (imc>=50){
    document.write("El IMC es ",+imc+ "  <br><br>  <p style='color: #AD060A';><big><big>Esta en Obesidad IV</big><img src='img/obesidad4.png' alt='bp' width='25px' height='25px'></big></p>")
} else{
    document.write("Escriba dos valores numericos esperados... <img src='img/cancelar.png' alt='no' width='25px' height='25px'> <br><br> <a style='color: #93CF52; text-decoration: none'; href='index.html'>Click Aquí para ejecutar</a>")
}