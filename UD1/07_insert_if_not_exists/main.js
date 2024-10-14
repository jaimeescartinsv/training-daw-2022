const assert = require('assert').strict;

function insertIfNotExists(array, item, position) {
    // Verificar si el elemento ya existe en el array
    if (!array.includes(item)) {
        // Insertar al principio o al final según el valor de 'position'
        if (position) {
            array.unshift(item); // Inserta al principio
        } else {
            array.push(item); // Inserta al final
        }
    }
    return array;
}

let array = ['pera', 'manzana'];

// Pruebas
let result = insertIfNotExists(array, 'pera', false);
assert.deepStrictEqual(result, ['pera', 'manzana']);

result = insertIfNotExists(array, 'melón', false);
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón']);

result = insertIfNotExists(array, 'melocotón', true);
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón']);

