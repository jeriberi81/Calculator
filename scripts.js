// simple arithmetic calculator app.

/**
 * 1. Move global functions into an object literal
 * 2. Use bracket notation to invoke the appropriate method
 */

const calculator = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  remainder(a, b) {
    return a % b;
  }
};

console.log(calculator.add(3, 3));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

//Use an anonymous callback function as the 2nd parameter
form.addEventListener("submit", function(event) {
  //Prevent the default browser behavior - DON"T SUBMIT
  event.preventDefault();

  // form inputs have a property called value
  console.log(num1.value, num2.value, select.value);
});
