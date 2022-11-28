# 4.	Los tramites de impuestos para la declaración de la renta en el gobierno vigente son los siguientes:
# Diseñe una app que al ingresar por el usuario su valor de renta anual y muestre por pantalla:
# 1.	El Valor por Declarar
# 2.	El Impuesto Calculado
# 3.	Calcule el descuento
# 4.	Total = Impuesto – Descuento 

rena=float(input("Digite el valor de renta anual ($): "))

if rena<150000000:
    print("1. Menos de 150.000.000")
    imp=rena*0.04
    print("2. Impuesto calculado (4%): ",imp,"$")
    des=rena*0.03
    print("3. Descuento(3%): ",des,"$")
    print("4. Total: ", (imp-des), "$") 
elif rena>=150000000 and rena<250000000:
    print("1. Entre 150.000.000 y 250.000.000")
    imp=rena*0.08
    print("2. Impuesto calculado (8%): ",imp,"$")
    des=rena*0.05
    print("3. Descuento(5%): ",des,"$")
    print("4. Total: ", (imp-des), "$")  
elif rena>=250000000 and rena<450000000:
    print("1. Entre 250.000.000 y 450.000.000")
    imp=rena*0.10
    print("2. Impuesto calculado (10%): ",imp,"$")
    des=rena*0.07
    print("3. Descuento(7%): ",des,"$")
    print("4. Total: ", (imp-des), "$") 
elif rena>=450000000 and rena<650000000:
    print("Entre 450.000.000y 650.000.000")
    imp=rena*0.15
    print("2. Impuesto calculado (15%): ",imp,"$")
    des=rena*0.10
    print("3. Descuento(10%): ",des,"$") 
    print("4. Total: ", (imp-des), "$") 
elif rena>650000000:
    print("1. Más de 650.000.000")
    imp=rena*0.19
    print("2. Impuesto calculado (19%): ",imp,"$")
    des=rena*0.12
    print("3. Descuento(12%): ",des,"$")
    print("4. Total: ", (imp-des), "$") 
else:
    print("Verifique el valor ingresado:")
    
    

    
