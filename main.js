// initializes the four math buttons & output node
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
// let output = document.querySelector("#output");

// takes an id name & extracts the number from that element
getNum = (id) => {
  num = document.querySelector(`#${id}`).value;
  num = parseFloat(num);
  return num;
}

printResult = (message) => {
  let result = document.createElement("h4");
  result.textContent = message;
  let output = document.querySelector("#output");
  // shrinks the first element before adding the new result
  output.firstElementChild.className = "output--prev";
  output.insertBefore(result, output.firstElementChild);
  // makes the most recent equation larger
  output.firstElementChild.className = "output--recent";
}

add = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  let message = `${num1} + ${num2} = ${num1 + num2}`;
  printResult(message);
}
subtract = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  let message = `${num1} - ${num2} = ${num1 - num2}`;
  printResult(message);
}
multiply = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  let message = `${num1} x ${num2} = ${num1 * num2}`;
  printResult(message);
}
divide = () => {
  let num1 = getNum("num1");
  let num2 = getNum("num2");
  let message = `${num1} / ${num2} = ${num1 / num2}`;
  printResult(message);
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
