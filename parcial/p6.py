#6.	Diseñe una app que pida un número entero mayor que cero y que escriba sus divisores

n=int(input("Ingresa un número entero mayor a cero: "))
i=0
for div in range(1,n,+1):
    if (n%div)==0:
        print("El número ",div," es divisor de ",n)
        i += 1
    