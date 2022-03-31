let prevNumber ='';
let calculatorOperation ='';
let currentNumber ='0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
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
        // add event while clicked
        calculatorOperation = event.target.value;
        console.log(calculatorOperation);
    })   
});

