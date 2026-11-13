function quadraticSum(first, second) {
  const result = first * first + second * second;
  return result;
}

const num1 = prompt("Anna 1. luku.");
const num2 = prompt("Anna 2. luku.");
const quad = quadraticSum(num1, num2);
console.log("Lukujen " + num1 + " ja " + num2 + " neliösumma on " + quad);