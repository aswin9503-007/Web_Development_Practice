function add(num1, num2) {
  return num1 + num2;
}

function Subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function modulo(num1, num2) {
  return num1 % num2;
}

function calculator(num1, num2, operator){
    return operator(num1 , num2)
}

console.log(calculator(3, 3, add))
console.log(calculator(3, 3, Subtract));
console.log(calculator(3, 3, multiply));
console.log(calculator(3, 3, divide));
