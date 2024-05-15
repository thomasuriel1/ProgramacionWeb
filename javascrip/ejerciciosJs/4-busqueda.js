//Ejercicio: 
//Crear una función que reciba un array de palabras y devuelva true si todas 
//las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
//Usa el método endsWith() de string para resolverlo.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

const array = ['carpa', ' tormenta', 'casa']
const sinA = ['pepe', 'carlos', 'juan']

function terminanEnA(words) {
    const terminaEnA = words.every((word) => word.endsWith("a"))
    return terminaEnA
}

console.log(terminanEnA(array))


