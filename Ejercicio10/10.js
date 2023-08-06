async function completarTabla() {
    // Obtener datos de la API
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

    // Crear filas de la tabla
    let tabla = document.getElementById("tabla");
    for (let usuario of data) {
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = usuario.name;
        fila.appendChild(celdaNombre);
        let celdaApellido = document.createElement("td");
        celdaApellido.textContent = usuario.username;
        fila.appendChild(celdaApellido);
        let celdaEmail = document.createElement("td");
        celdaEmail.textContent = usuario.email;
        fila.appendChild(celdaEmail);
        let celdaEmpresa = document.createElement("td");
        celdaEmpresa.textContent = usuario.company.name;
        fila.appendChild(celdaEmpresa);
        let celdaDireccion = document.createElement("td");
        celdaDireccion.textContent = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
        fila.appendChild(celdaDireccion);
        tabla.appendChild(fila);
    }
}

completarTabla();
