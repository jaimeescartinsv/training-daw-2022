const assert = require('assert').strict;

function nextPairs(value) {
    // Aseguramos que el número sea un entero
    if (!Number.isInteger(value)) {
        throw new Error('El valor debe ser un número entero.');
    }

    // Calculamos el primer número par después del valor
    let nextEven = value % 2 === 0 ? value + 2 : value + 1;

    return [nextEven, nextEven + 2];
}

assert.deepStrictEqual(nextPairs(3), [4, 6]);
assert.deepStrictEqual(nextPairs(4), [6, 8]);

console.log(nextPairs(3)); // [4, 6]
console.log(nextPairs(4)); // [6, 8]
