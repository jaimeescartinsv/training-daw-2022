window.onload = function(e) {
    console.log('documento cargado');

    // Obtener todos los enlaces y secciones
    const enlaces = document.querySelectorAll('a[id^="enlace_"]');
    const contenidos = document.querySelectorAll('p[id^="contenidos_"]');

    enlaces.forEach((enlace, index) => {
        enlace.onclick = function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace

            // Alternar la visibilidad de la sección asociada
            const contenido = contenidos[index];
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block';
                enlace.innerHTML = 'Ocultar contenidos'; 
            } else {
                contenido.style.display = 'none';
                enlace.innerHTML = 'Mostrar contenidos'; 
            }
        };
    });
};