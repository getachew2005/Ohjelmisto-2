'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');

const firstname = document.querySelector('input[name="firstname"]');
const lastname = document.querySelector('input[name="lastname"]');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  target.textContent = 'Nimesi on ' + firstname.value + ' ' + lastname.value;
});