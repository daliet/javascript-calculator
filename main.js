const screen = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll(".numbers");


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




