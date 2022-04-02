let prevNumber = "";
let calculatorOperator = "";
let currentNumber = "0";
let equationStr = "";
let startEq = false;

const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorEquation = document.querySelector(".calculator-equation");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const updateEquation = (equation) => {
  calculatorEquation.value = equation;
};

const inputNumber = (number) => {
  if (currentNumber === prevNumber && startEq === false) {
    currentNumber = "0";
    startEq = true;
  }

  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputEquation = (equation) => {
  if (equationStr === "0") {
    equationStr = equation;
  } else {
    equationStr += equation;
  }
};

// operator
const inputOperator = (operator) => {
  if (calculatorOperator !== "") calculate();
  calculatorOperator = operator;
  prevNumber = currentNumber;
  //currentNumber = '0';
  startEq = false;
};

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) return;
  currentNumber += dot;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    // add event while clicked
    inputNumber(event.target.value);
    updateScreen(currentNumber);
    inputEquation(event.target.value);
    updateEquation(equationStr);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(event.target.value);
    inputEquation(` ${event.target.value} `);
    updateEquation(equationStr);
  });
});

const equal = document.querySelector(".equal-sign");

equal.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
  inputEquation(` = ${currentNumber}`);
  updateEquation(equationStr);
});

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
  percentageNum();
  updateScreen(currentNumber);
  updateEquation(currentNumber);
});

const clearer = document.querySelector(".all-clear");

clearer.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
  inputEquation(currentNumber);
  updateEquation(equationStr);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
  inputEquation(event.target.value);
  updateEquation(equationStr);
});

const deleter = document.querySelector(".deleter");

deleter.addEventListener("click", () => {
  deleteEquation();
  updateScreen(currentNumber);
  updateEquation(equationStr);
});

const deleteEquation = () => {
  currentNumber = currentNumber.slice(0, -1);
  equationStr = equationStr.slice(0, -1);
};

const clearAll = () => {
  currentNumber = "0";
  prevNumber = "0";
  equationStr = "";
  calculatorOperator = "";
  startEq = false;
};

const percentageNum = () => {
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  prevNumber = currentNumber;
  startEq = false;
};

const calculate = () => {
  let result = 0;
  let number1 = parseFloat(prevNumber);
  let number2 = parseFloat(currentNumber);
  switch (calculatorOperator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    default:
      return;
  }

  //   if (result % parseInt(result) > 0) {
  //     currentNumber = parseInt(result).toString();
  //   } else {
  //     currentNumber = result.toString();
  //   }

  currentNumber = result.toString();
  prevNumber = currentNumber;
  startEq = false;
  calculatorOperator = "";
};
