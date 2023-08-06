let boton = document.getElementById("mi-boton");
boton.addEventListener("click", function() {
    let colores = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
    let colorActual = boton.style.backgroundColor;
    let indiceColor = colores.indexOf(colorActual);
    let nuevoIndiceColor = (indiceColor + 1) % colores.length;
    boton.style.backgroundColor = colores[nuevoIndiceColor];
});