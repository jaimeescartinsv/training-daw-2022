const fs = require('fs');

function checkAnagram(palabras) {
    const [palabra1, palabra2] = palabras.split(' ').map(palabra => palabra.replace(/\s+/g, '').toLowerCase());
    const ordenada1 = palabra1.split('').sort().join('');
    const ordenada2 = palabra2.split('').sort().join('');
    return ordenada1 === ordenada2;
}

function encontrarAnagramas(nombreArchivo) {
    fs.readFile(nombreArchivo, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Dividir el contenido en palabras
        const palabras = data.split(/\r?\n/).filter(Boolean); // Eliminar líneas vacías
        console.log('Palabras leídas:', palabras); // Mensaje de depuración

        const anagramasEncontrados = [];

        for (let i = 0; i < palabras.length; i++) {
            for (let j = i + 1; j < palabras.length; j++) {
                if (checkAnagram(`${palabras[i]} ${palabras[j]}`)) {
                    anagramasEncontrados.push(`${palabras[i]} ${palabras[j]}`);
                    console.log(`Anagrama encontrado: ${palabras[i]} ${palabras[j]}`);
                }
            }
        }

        // Mostrar cuántos anagramas se han encontrado
        console.log(`Se han encontrado ${anagramasEncontrados.length} anagramas.`);

        if (anagramasEncontrados.length > 0) {
            console.log('Anagramas encontrados:');
            anagramasEncontrados.forEach(par => console.log(par));
        } else {
            console.log('No se encontraron anagramas.');
        }
    });
}

// Llama a la función con el nombre del archivo
encontrarAnagramas('./anagrama/wordlist.txt');