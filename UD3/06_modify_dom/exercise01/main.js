window.onload = function(e) {
    console.log('documento cargado');

    // Cambiar el título del h1
    document.getElementsByTagName('h1')[0].innerText = 'Cambiado desde el JS!!';

    // Cambiar el título del segundo h2
    const segundoH2 = document.querySelectorAll('h2')[1];
    segundoH2.textContent = 'Nuevo Título';

    // Seleccionar el elemento con id == username
    const usernameInput = document.getElementById('username');
    console.log(usernameInput);

    // Cambiar el color de todos los .first que estén dentro de un artículo
    const firstParagraphs = document.querySelectorAll('article .first');
    firstParagraphs.forEach(paragraph => {
        paragraph.style.color = 'blue'; 
    });

    // Seleccionar todos los elementos li con class == item
    const listItems = document.querySelectorAll('li.item');
    console.log(listItems);

    // Seleccionar todos los buttons dentro de class == buttons
    const buttonsInButtonsClass = document.querySelectorAll('.buttons button');
    console.log(buttonsInButtonsClass);

    // Cambiar el color de fondo del primer párrafo
    const primerParrafo = document.querySelector('article p:first-of-type');
    primerParrafo.style.backgroundColor = 'yellow'; 

    // Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    buttonsInButtonsClass.forEach(button => {
        button.style.color = 'red'; 
    });
}