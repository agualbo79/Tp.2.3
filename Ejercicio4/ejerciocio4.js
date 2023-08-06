function encontrarMaximo(arr) {
  let maximo = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximo) {
          maximo = arr[i];
      }
  }
  return maximo;
}

let numeros = [4, 2, 5, 1, 3];
let maximo = encontrarMaximo(numeros);
console.log(maximo); // 5
