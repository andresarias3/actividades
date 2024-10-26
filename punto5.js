// Array inicial de contactos
let contactoc = [`sofia`, `camilo`, `pablo`, `ramon`, `marta`, `juliana`];

// Mostrar la tabla de contactos
console.table(contactoc);

// Array de nombres
let nombres = [`pablito`, `Mateo`, `Valentina`, `Lucas`, `Camila`, `Diego`, `Isabella`, `Mateo`]; // Sin coma al final

// Agregar un elemento al final del array contactoc
contactoc.push(nombres[0]);
console.table(contactoc); // Ver el array actualizado

// agrega añade un elemento al principio ala array contactoc
contactoc.unshift(nombres[2]);
console.table(contactoc); // Ver el array actualizado

// Eliminar el primer elemento de contactoc
contactoc.shift();
console.table(contactoc); // Ver el array actualizado

// Eliminar el último elemento de contactoc
contactoc.pop();
console.table(contactoc); // Ver el array actualizado
 
// elimina un elemento siguiente  la pocision 0 de la array contactoc
contactoc.splice(0, 1); // Esto elimina el primer elemento
console.table(contactoc); // Ver el array actualizado

// Usar slice para crear una nueva copia de contactoc desde el índice 1 hasta el 3
let nuevaLista = contactoc.slice(1, 3);
console.table(nuevaLista); // Mostrar la nueva lista (no modifica contactoc)