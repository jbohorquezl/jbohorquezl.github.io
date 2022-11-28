# 3.	Diseñe una app que, al ingresar la cedula y una 
# contraseña, valide si el nombre de usuario y contraseña 
# introducida coinciden con la cedula (1102101101) y la 
# contraseña del sistema (m@2am0rra) , si es verdadero que 
# muestre un mensaje de bienvenida , sino que muestre un 
# mensaje indicando la contraseña es errónea.

usuario= "1102101101"
key= "m@2am0rra"

us=str(input("Ingrese su usuario: "))
con=str(input("Digite la contraseña: "))

if usuario==us and key==con:
    print("Bienvenid@")
else:
    print("Usuario y/o contrasaña incorrectos...")