const persona = { 
    //clave y valor
    name: 'thomas',
    lastName: "laura",
    age: 30,
    isWorking: true,
    perros: ["si","no"],
    walk: () => { 
        return "hola"
    }
  }

  console.log(persona.age); //accedemos a la propiedad
  console.log(persona("name")); //accedemos a la propiedad
  persona.pepito = "pepito";//agregamos una nueva propiedad
  delete persona.age //borrar la propiedad

  console.log(persona);