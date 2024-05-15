//Ejercicio práctico:
//Dada una lista de números, escribe una función en JavaScript que devuelva 
//la suma de todos los números pares en la lista. La función deberá iterar 
//sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. 
//Realizar una solución con for y una con while


const lista = [1,2,4,5,5,6,6,7] 
let total = 0
let contador = 0

function sumarPares(numeros) {
   while(contador < numeros.length){
        if (numeros[contador] % 2 == 0) {
            total = total + numeros[contador]
        }

        contador++ 
   }
   return total
}
console.log(sumarPares(lista));


