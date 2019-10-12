// simple arithmetic calculator app.

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

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

//Use an anonymous callback function as the 2nd parameter
form.addEventListener("submit", function(event) {
  //Prevent the default browser behavior - DON"T SUBMIT
  event.preventDefault();

  // form inputs have a property called value

  output.textContent = calculator[select.value](num1.value, num2.value);
});
