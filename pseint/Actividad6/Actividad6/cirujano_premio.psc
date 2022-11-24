Proceso Premio
	Definir sueldo,sueluno,sueldos,premiouno,premiodos Como Real;
	Definir cargo Como Caracter;
	Escribir "Ingrese el valor de su sueldo actual:";
	leer sueldo;
	Escribir "Ingrese su rol o cargo:";
	escribir "NOTA: Escriba en Minusculas."
	leer cargo;
	premiouno<-sueldo*50/100;
	sueluno<-premiouno+sueldo;
	premiodos<-sueldo*10/100;
	sueldos<-premiouno+sueldo;
	si cargo = "cirujano" Entonces
		Escribir "sr Cirujano usted tiene un premio equivalente a un 50% mas de sueldo. Por lo tanto su sueldo total es: $" sueluno; 
	SiNo
		Escribir "Usted obtiene un premio equivalente a un 10% mas de su sueldo. Por lo tanto su sueldo total es: $" sueldos;
	FinSi
	
FinProceso
