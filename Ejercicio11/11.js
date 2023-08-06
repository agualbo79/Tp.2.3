// Crear un objeto para almacenar los eventos
let eventos = {
    "2023-08-23": [
        {hora: "09:00", descripcion: "Reunión con el equipo de marketing"},
        {hora: "14:00", descripcion: "Almuerzo con el cliente"},
        {hora: "16:00", descripcion: "Presentación de propuesta de proyecto"}
    ],
    "2023-08-24": [
        {hora: "10:00", descripcion: "Revisión de informe financiero"},
        {hora: "13:00", descripcion: "Entrevista con candidato a gerente de ventas"},
        {hora: "15:00", descripcion: "Llamada con proveedor"}
    ]
};

// Función para mostrar los eventos de un día específico
function mostrarEventos(fecha) {
    let listaEventos = document.getElementById("lista-eventos");
    listaEventos.innerHTML = "";
    if (eventos.hasOwnProperty(fecha)) {
        for (let evento of eventos[fecha]) {
            let elementoEvento = document.createElement("li");
            elementoEvento.textContent = `${evento.hora} - ${evento.descripcion}`;
            listaEventos.appendChild(elementoEvento);
        }
    } else {
        let elementoEvento = document.createElement("li");
        elementoEvento.textContent = "No hay eventos programados para este día";
        listaEventos.appendChild(elementoEvento);
    }
}
