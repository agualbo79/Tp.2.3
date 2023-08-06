// Crear un objeto persona
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  sexo: "Masculino",
  telefono: "123456789"
};

// Crear una tabla y agregar encabezados
let tabla = document.createElement("table");
let encabezados = ["Nombre", "Apellido", "Edad", "Sexo", "Telefono"];
let filaEncabezados = document.createElement("tr");
for (let encabezado of encabezados) {
  let celda = document.createElement("th");
  celda.textContent = encabezado;
  filaEncabezados.appendChild(celda);
}
tabla.appendChild(filaEncabezados);

// Agregar datos de la persona a la tabla
let filaDatos = document.createElement("tr");
for (let propiedad in persona) {
  let celda = document.createElement("td");
  celda.textContent = persona[propiedad];
  filaDatos.appendChild(celda);
}
tabla.appendChild(filaDatos);

// Insertar la tabla en el documento
document.body.appendChild(tabla);
