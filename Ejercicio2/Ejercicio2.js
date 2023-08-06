

function ordenarAscendente(arr) {
    let nuevoArray = [...arr];
    nuevoArray.sort((a, b) => a - b);
    return nuevoArray;
}
let numeros = [4, 2, 5, 1, 3];
let numerosOrdenados = ordenarAscendente(numeros);
console.log(numerosOrdenados); // [1, 2, 3, 4, 5]
