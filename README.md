# Javascript Calculator

A simple JavaScript-based calculator application that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator has the following features:

- Display for the current number.
- Buttons for digits (0-9), operators (+, -, *, /), decimal point, and clear button.
- Results are shown immediately after each operation or by clicking on the equal sign.


## Features

- Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
- Handles multiple operations in sequence.
- Supports decimal points in calculations.
- Resets the entire calculator.


## Files

- `index.html`: The structure of the calculator, including the screen and buttons.
- `style.css`: Styling for the calculator layout and appearance.
- `script.js`: JavaScript code that adds functionality to the calculator.


## How to Run

[**Click here**](daliet.github.io/javascript-calculator/) or:

1. Clone or download this repository to your local machine.
2. Open `index.html` in your web browser.
3. Use the Calculator.


## Code Explanation

- **Operations**: The calculator supports the four basic arithmetic operations: addition, subtraction, multiplication, and division. The operations are stored in the `operations` object for easy access.
  
- **Number Input**: The user can input numbers by clicking the corresponding number buttons. This triggers the `addNumber()` function which adds numbers to the current input and stores the input in the `currentNumber` variable.

- **Operator Handling**: When an operator button is clicked, the `addOperator` function is called. The current number is pushed into the `numbers` array, and the selected operator is saved. If two numbers are available, the `calculate()` function is called.

- **Calculation**: When the `=` button is clicked, the `calculate()` function is triggered, which processes the numbers and the selected operator and displays the result.

- **Decimal**: The calculator allows entering a decimal point with the `addDecimal()` function and it ensures that the decimal is only added once to the current number.

- **Clear**: The `AC` button calls the `resetCalculator()` function which resets the calculator by clearing the `currentNumber`, `numbers` array, and `operator`.


  ## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**