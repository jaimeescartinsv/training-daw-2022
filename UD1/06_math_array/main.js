function doCalculation(array) {
    // Calcular la suma
    const sum = array.reduce((acc, num) => acc + num, 0);
    
    // Encontrar el elemento más grande
    const max = Math.max(...array);
    
    // Encontrar el elemento más pequeño
    const min = Math.min(...array);
    
    // Calcular la media
    const average = sum / array.length;

    // Imprimir los resultados
    console.log('Suma: ' + sum);
    console.log('Elemento más grande: ' + max);
    console.log('Elemento más pequeño: ' + min);
    console.log('Media: ' + average);
}

// Pruebas
doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5]);
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
