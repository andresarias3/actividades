// Crear la lista original de tareas
let lisTarea = [
    `[✅] comprar cafe `,
    `[✅] comprar comida `,
    `[✅] sacar al perro `,
    `[✅] arreglar casa `,
    `[✅] hacer la comida `
];
console.log("Lista inicial:", lisTarea);

// Añadir tareas al inicio (esto duplicará 'hacer la comida' y 'comprar comida')
lisTarea.unshift(`[✅] hacer la comida `);
lisTarea.unshift(`[✅] comprar comida `);
console.log("Después de usar unshift:", lisTarea);

// Remover el primer elemento de la lista
lisTarea.reverse().shift().reverse();
console.log("Después de usar shift:", lisTarea);
