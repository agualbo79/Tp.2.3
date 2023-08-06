
// Crear un vector de números con al menos 10 elementos
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar todos los números pares
let numerosPares = numeros.filter(numero => numero % 2 === 0);

// Insertar los números pares dentro de un elemento HTML
let elemento = document.getElementById("numeros-pares");
elemento.innerHTML = numerosPares.join(", ");
