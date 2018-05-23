const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");

addButton.addEventListener("click", add());
subtractButton.addEventListener("click", subtract() );
multiplyButton.addEventListener("click", multiply() );
divideButton.addEventListener("click", divide() );

add = () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  console.log(num1 + num2);
};