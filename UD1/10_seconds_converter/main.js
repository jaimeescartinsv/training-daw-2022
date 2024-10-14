const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    // Aseguramos que el valor sea un número entero no negativo
    if (!Number.isInteger(value) || value < 0) {
        throw new Error('El valor debe ser un número entero no negativo.');
    }

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    return `${hours}:${minutes}:${seconds}`;
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0");
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0"); 
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5");

console.log(toHoursMinutesSeconds(3600)); // "1:0:0"
console.log(toHoursMinutesSeconds(3720)); // "1:2:0"
console.log(toHoursMinutesSeconds(3725)); // "1:2:5"