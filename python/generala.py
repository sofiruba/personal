import random
from pickle import FALSE, TRUE

numeros = [random.randint(1,6),random.randint(1,6),random.randint(1,6),random.randint(1,6),random.randint(1,6)]
intento = 1
print(numeros)

generala = FALSE

if numeros[0] == numeros[1] == numeros[2] ==  numeros[3] == numeros[4]:
    generala = TRUE
else: 
    while generala == FALSE:
        numeros = [random.randint(1,6),random.randint(1,6),random.randint(1,6),random.randint(1,6),random.randint(1,6)]
        print(numeros)
        intento = intento + 1 
        print(intento)   
        if numeros[0] == numeros[1] == numeros[2] == numeros[3] == numeros[4]:
            generala = TRUE
            print("Hiciste generala!") 
        elif intento > 10:
            print("Cantidad de intentos excedida")    
            break

            