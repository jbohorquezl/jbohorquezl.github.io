Proceso descuento_precio
	Definir precio,descuento,pagar Como Real;
	escribir "Ingrese el valor de su compra (COP)";
	leer precio;
	descuento<-precio*5/100;
	pagar<-precio-descuento;
	si precio>=50000
		
		Escribir "Usted tiene un descuento del 5%, esto equivale a un valor a pagar: $" pagar;
	SiNo
		Escribir "No hay descuento por su compra."
	FinSi
	
FinProceso
