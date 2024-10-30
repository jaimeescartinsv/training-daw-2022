let currentId = 1; // Variable para autoincrementar el ID

function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0];

    let tr = document.createElement('tr');

    // Crear la celda ID
    let td = document.createElement('td');
    td.innerText = currentId; 
    tr.appendChild(td);

    // Crear la celda Name
    td = document.createElement('td');
    td.innerText = 'Example';
    tr.appendChild(td);

    // Crear la celda Surname
    td = document.createElement('td');
    td.innerText = 'Surname';
    tr.appendChild(td);

    // Crear la celda Acciones
    td = document.createElement('td');
    let editLink = document.createElement('a');
    editLink.href = `http://localhost/edit/${currentId}`; 
    editLink.innerText = 'Edit';
    td.appendChild(editLink);
    tr.appendChild(td);

    tbody.appendChild(tr);
    console.log('add');

    currentId++; // Incrementar el ID para el siguiente elemento
}