const booleanos = {
    a : true,
    b : "hola",
    c : false,
}
function crearFuncion(objeto){
 const arrays = [];
 for (const property in objeto){
    if(objeto[property] === true || objeto[property] === false){
    arrays.push(property);
    }
 }   
 return arrays
}
console.log(crearFuncion(booleanos));