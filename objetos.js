//OBJETOS

/**
 * Un objeto es una estructura de datos y se utiliza para representar y organizar informacion ⚠️
 */

/**
 * Los objetos en JS, son una coleccion de pares, (propiedad:valor || key:value)
 * Cada (propiedad || key) es un STRING. Actua como identifacador UNICO! 
 * Los valores (values), pueden ser de cualquier tipos de datos, numbers, array, objeto, function, etc
 * Los pares se separan entre comas (,)
 */


/**
 * SINTAXIS
 * {
 *  key1:value,
 *  key2:value,
 *  key3:value
 * }
 */


console.log('--------------------------------------');

const persona = {
  nombre: 'Gabriel',
  apellido: 'Martinez',
  pais: 'Argentina',
  social: [
    { instagram: '@gabriel4ig' },
    { email: 'gabriel@gmail.com' },
  ]
}

console.log(persona);

console.log('--------------------------------------');

//FORMAS DE ACCEDER A UN OBJETO

//Acceso de propiedades || keys por notacion de punto
console.log(persona.nombre); //Gabriel
console.log(persona.social[0].instagram);//@gabriel4ig
console.log(persona.social[1].email); //gabriel@gmail.com

console.log('--------------------------------------');

// Acceso a propiedad por notacion corchetes || Acceso a propiedad por notacion por una key || propiedad dinamica

const name = 'nombre'
console.log(persona[name]); //Gabriel
console.log(persona['social'][0].instagram); //@gabriel4ig
console.log(persona['social'][0]['instagram']); //@gabriel4ig
console.log(persona['social']); //[ { instagram: '@gabriel4ig' }, { email: 'gabriel@gmail.com' } ]
console.log(persona['social'][0]); //{ instagram: '@gabriel4ig' }

console.log('--------------------------------------');


//OPERADOR IN

// Pregunta si la key definida existe en el objeto. Recordar que la key o propiedad es de tipo string. En caso de que exista retornara true, Caso contrario retornara false

console.log('nombre' in persona); //true
console.log('age' in persona); //false
console.log('edad' in persona); //false

console.log('--------------------------------------');


//For in
// se utiliza para iterar  sobres las propiedad enumerables de un objeto


/**
 * SINTAXIS
 * 
 * for(key in Objeto){
 * //codigo que se debe ejecutar
 * }
 */

for (const key in persona) {
  console.log(key); // nombre apellido pais social // Nos devuelve todas las propiedades del objeto
}

console.log('--------------------------------------');
// const propiedad = 'nombre'
for (const propiedad in persona) {
  console.log(persona[propiedad]); //voy a ver los valores asociados a cada key
}
console.log('--------------------------------------');

//Agregar
persona['deporte'] = 'futbol'

persona.favoriteColor = 'Azul'

console.log(persona);