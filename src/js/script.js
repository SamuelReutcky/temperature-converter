'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const toFahrenheit = document.querySelector('#to-fahrenheit');
const toCelsius = document.querySelector('#to-celsius');
const changeColor = document.querySelector('.change-color');
const result = document.querySelector('.result');
const resultText = document.querySelector('.result p');


changeColor.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    this.innerText = 'Light Mode';
    changeColor.style.backgroundColor = '#fff';
    changeColor.style.color = '#1a1d28';
    input.style.backgroundColor = '#2e3347';
    input.style.color = '#f9f9f9';
    result.style.backgroundColor = '#2e3347';
    result.style.color = '#e7e7e7';
    resultText.style.backgroundColor = '#2e3347';
  } else {
    this.innerText = 'Dark Mode';
    changeColor.style.backgroundColor = '#1a1d28';
    changeColor.style.color = '#fff';
    input.style.backgroundColor = '#fff';
    input.style.color = '#1a1d28';
    result.style.backgroundColor = '#fff';
    result.style.color = '#1a1d28';
    resultText.style.backgroundColor = '#fff';
  }
});

function isNumber(inputValue) {
  return inputValue.length > 0 && !isNaN(inputValue);
}

function convertToFahrenheit(inputValue) {
  return ((inputValue * 9 / 5) + 32).toFixed(2);
}

function convertToCelsius(inputValue) {
  return ((inputValue - 32) * 5 / 9).toFixed(2);
}

button.addEventListener('click', function() {
  let a = input.value.trim();
  if (isNumber(a)) {
    if (toFahrenheit.checked) {
      let total = convertToFahrenheit(parseFloat(a));
      result.innerText = `${a}°C in Fahrenheit is: ${total}°F`;
    } else if (toCelsius.checked) {
      let total = convertToCelsius(parseFloat(a));
      result.innerText = `${a}°F in Celsius is: ${total}°C`;
    }
    input.value = '';
  } else {
    result.innerText = 'Please enter numbers only';
    input.value = ''; 
  }
});