let listaTareas = [
    `[1] comprar cafe `,
    `[2] comprar comida `,
    `[3] sacar al perro `,
    `[4] arreglar casa `,
    `[5] hacer la comida `
];

// Eliminar el cuarto elemento (índice 3)
listaTareas.splice(3, 1);
console.log(`Lista después de eliminar un elemento: ${listaTareas}`);

// Agregar un elemento en la posición 1
listaTareas.splice(1, 0, `1elementoAAgregar`);
console.log(`Lista después de agregar un elemento en el índice 1: ${listaTareas}`);

// Ejemplo de agregar dos elementos en una posición específica
listaTareas.splice(2, 0, `2elementoAAgregar`, `3elementoAAgregar`);
console.log(`Lista después de agregar dos elementos en el índice 2: ${listaTareas}`);