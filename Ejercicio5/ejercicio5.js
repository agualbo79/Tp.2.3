function sumaPrimos(n) {
  let suma = 0;
  for (let i = 2; i <= n; i++) {
      if (esPrimo(i)) {
          suma += i;
      }
  }
  return suma;
}

function esPrimo(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}
let n = 10;
let suma = sumaPrimos(n);
console.log(suma); // 17
