function enviarMensaje() {
    let mensaje = document.getElementById("mensaje").value;
    if (mensaje.trim() !== "") {
        let chat = document.getElementById("chat");
        let elementoMensaje = document.createElement("li");
        elementoMensaje.textContent = mensaje;
        chat.appendChild(elementoMensaje);
        chat.scrollTop = chat.scrollHeight;
        document.getElementById("mensaje").value = "";
    }
}