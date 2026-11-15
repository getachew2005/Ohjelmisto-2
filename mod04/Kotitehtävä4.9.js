'use strict';

const calculation = document.getElementById('calculation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function() {

    const input = calculation.value;

    let operator;

    if (input.includes('+')) {
        operator = '+';
    } else if (input.includes('-')) {
        operator = '-';
    } else if (input.includes('*')) {
        operator = '*';
    } else if (input.includes('/')) {
        operator = '/';
    } else {
        result.textContent = 'Invalid calculation';
        return;
    }

    const numbers = input.split(operator);

    if (numbers.length !== 2 || numbers[0].trim() === '' || numbers[1].trim() === '') {
        result.textContent = 'Invalid calculation';
        return;
    }

    const num1 = Number(numbers[0]);
    const num2 = Number(numbers[1]);

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        result.textContent = 'Please enter integers';
        return;
    }

    let answer;

    if (operator === '+') {
        answer = num1 + num2;
    } else if (operator === '-') {
        answer = num1 - num2;
    } else if (operator === '*') {
        answer = num1 * num2;
    } else if (operator === '/') {
        if (num2 === 0) {
            result.textContent = 'Cannot divide by zero!';
            return;
        }
        answer = num1 / num2;
    }

    result.textContent = 'Result: ' + answer;
});