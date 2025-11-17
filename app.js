const calcDisplay = document.querySelector(".calc__screen");
const buttons = document.querySelectorAll("button");
const clearButton = document.getElementById("clear");

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
  const value = button.textContent;
  if (value === "Clear") {
    calculation = [];
    calcDisplay.textContent = "";
    console.clear();
  } else if (value === "=") {
    calcDisplay.textContent = eval(accumulativeCalculation);
    console.log(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    accumulativeCalculation.toString();
    calcDisplay.textContent = accumulativeCalculation;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);

// clearButton.addEventListener("click", () => {
//   calcDisplay.textContent = "";
// });
