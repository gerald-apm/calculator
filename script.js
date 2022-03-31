let prevNumber ='';
let calculatorOpration ='';
let currentNumber ='0';

const calculatorScreen = document.querySelector('.calculator-screen')

const inputNumber = (number)=>{
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    
}

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })   
})


