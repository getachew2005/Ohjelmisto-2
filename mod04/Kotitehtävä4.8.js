'use strict';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function() {

    const number1 = Number(num1.value);
    const number2 = Number(num2.value);

    const selectedOperation = operation.value;

    let answer;

    if (selectedOperation === 'add') {
        answer = number1 + number2;

    } else if (selectedOperation === 'sub') {
        answer = number1 - number2;

    } else if (selectedOperation === 'multi') {
        answer = number1 * number2;

    } else if (selectedOperation === 'div') {
        if (number2 === 0) {
            result.textContent = 'Cannot divide by zero!';
            return;
        }
        answer = number1 / number2;
    }

    result.textContent = 'Result: ' + answer;
});