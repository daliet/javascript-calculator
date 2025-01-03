const screen = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll(".numbers");
const operationButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal-sign");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".all-clear");


let currentNumber = "0";
let numbers = [];
let operator = "";

const operations = {
    "+" : (a,b) => a + b,
    "-" : (a,b) => a - b,
    "*" : (a,b) => a * b,
    "/" : (a,b) => a / b
};


function addNumber (number) {
    if(number === "0" && currentNumber === "0") return;
    if (currentNumber === "0") {
        currentNumber = number;
    } else currentNumber += number;
        screen.value = currentNumber;
}

buttons.forEach (button => {
    button.addEventListener ('click', () => {
        addNumber (button.value);
    });
});



function addOperator (newOperator) {
    if (currentNumber !== "0") {
        numbers.push(parseFloat(currentNumber));
        if (numbers.length == 2) calculate();
        currentNumber = "0"; // Reset the current number to "0" after storing it
    }
    operator = newOperator;
}

operationButtons.forEach (button => {
    button.addEventListener ('click', () => {
        addOperator (button.value);
    });
});



function calculate () {
    const result = numbers.reduce(operations[operator]); // Apply the selected operator to the numbers array and perform the operation
    screen.value = result;
    numbers = [result]; // Update the numbers array with the result
    currentNumber = "0";
}


equalButton.addEventListener('click', () => {
    if(numbers.length === 0) return; // Prevent calculations if no numbers are available
    numbers.push(parseFloat(currentNumber));
    calculate();
});



function addDecimal () {
    if (!currentNumber.includes(decimalButton.value)) {
        currentNumber += decimalButton.value;
    }
}

decimalButton.addEventListener('click', addDecimal);



function resetCalculator () {
    currentNumber = "0";
    numbers = [];
    operator = "";
    screen.value = "0";
}

clearButton.addEventListener('click', resetCalculator);