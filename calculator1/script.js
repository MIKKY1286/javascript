let isNewCalculation = true;

function clearDisplay() {
    document.getElementById('display').value = '';
    isNewCalculation = true; // Reset when cleared
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    const display = document.getElementById('display');
    
    // If a new calculation starts, reset the display
    if (isNewCalculation) {
        display.value = number;
        isNewCalculation = false;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    const display = document.getElementById('display').value;
    if (display && !isNaN(display[display.length - 1])) {
        document.getElementById('display').value += operator;
        isNewCalculation = false;
    }
}

function appendDot() {
    const display = document.getElementById('display').value;
    const lastNumber = display.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        document.getElementById('display').value += '.';
        isNewCalculation = false;
    }
}

function calculate() {
    const display = document.getElementById('display').value;
    if (display) {
        document.getElementById('display').value = eval(display);
        isNewCalculation = true; // After calculation, reset for next input
    }
}
