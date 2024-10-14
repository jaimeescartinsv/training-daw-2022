const assert = require('assert').strict;

function abs(value) {
    const absoluteValue = value < 0 ? -value : value; // Calcula el valor absoluto
    console.log(absoluteValue); // Muestra el valor absoluto por pantalla
    return absoluteValue; 
}

// Pruebas
assert.strictEqual(abs(4), 4);
assert.strictEqual(abs(-4), 4);
assert.strictEqual(abs(0), 0);