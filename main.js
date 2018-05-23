// initializes the four math buttons & output node
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
let output = document.querySelector("#output");

// takes an id name & extracts the number from that element
getNum = (id) => {
  num = document.querySelector(`#${id}`).value;
  num = parseFloat(num);
  return num;
}

add = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  output.textContent = (num1 + num2);
}
subtract = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  output.textContent = (num1 - num2);
}
multiply = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  output.textContent = (num1 * num2);
}
divide = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  output.textContent = (num1 / num2);
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
