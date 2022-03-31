let prevNumber ='';
let calculatorOperation ='';
let currentNumber ='0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const inputNumber = (number) => {
    console.log(currentNumber);
    console.log(prevNumber);
    if (currentNumber === prevNumber) currentNumber = '0';

    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const inputOperator = (operator) =>  {
    calculatorOperation = operator;
    prevNumber = currentNumber;
    currentNumber = '0';
};


const inputDecimal = (dot) =>  {
    if (currentNumber.includes(".")) return;
    currentNumber += dot;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        // add event while clicked
        inputNumber(event.target.value);
        updateScreen(currentNumber);

    })   
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateScreen(event.target.value);
    })   
});

const equal = document.querySelector(".equal-sign");

equal.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});


const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
    percentageNum();
    updateScreen(currentNumber);
});

const clearer = document.querySelector(".all-clear");

clearer.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const clearAll = () => {
    currentNumber = '0';
    prevNumber = '0';
    calculatorOperation = '';
};

const percentageNum = () => {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
}

const calculate = () => {
    let result = 0;
    let number1 = parseFloat(prevNumber);
    let number2 = parseFloat(currentNumber);
    switch (calculatorOperation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            return;
    }

    if (result % parseInt(result) > 0) {
        currentNumber = parseInt(result).toString();
    } else {
        currentNumber = result.toString();
    }
    prevNumber = currentNumber;
    
    calculatorOperation = '';
};