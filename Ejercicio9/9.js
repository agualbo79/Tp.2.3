
        let formulario = document.getElementById("mi-formulario");
        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            let nombre = document.getElementById("nombre").value;
            let email = document.getElementById("email").value;
            console.log("Nombre:", nombre);
            console.log("Email:", email);
        });
