function calcularTriangulo(p1, p2, p3) {
    // Imprimir las coordenadas de los puntos
    console.log(`P1: (${p1.x}, ${p1.y})`);
    console.log(`P2: (${p2.x}, ${p2.y})`);
    console.log(`P3: (${p3.x}, ${p3.y})`);

    // Función para calcular la distancia entre dos puntos
    function distancia(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    // Calcular las longitudes de los lados
    const lado1 = distancia(p1, p2);
    const lado2 = distancia(p2, p3);
    const lado3 = distancia(p3, p1);

    // Clasificar el triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        return (`equilátero`); 
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return (`isósceles`); 
    } else {
        return (`escaleno`); 
    }
}

let p1 = {x: 0, y: 0};
let p2 = {x: 4, y: 0};
let p3 = {x: 2, y: 10};

const tipoTriangulo = calcularTriangulo(p1, p2, p3);
console.log(`Tipo de triángulo: ${tipoTriangulo}`);
