let fNum = 0;
let sNum = 0;
let op;
let autoResult = false;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide (a, b) {
    return a / b;
}

function multiply (a, b) {
    return a * b;
}

function operate (fNum, sNum, op) {
    if (op === "+") {
        return add(fNum, sNum);
    }
    else if (op === "-") {
        return subtract(fNum, sNum);
    }
    else if (op === "/") {
        if (sNum === 0) {
            return "Can't divide by zero, dumbass.";
        }
        else
            return divide(fNum, sNum);
    }
    else if (op === "*") {
        return multiply(fNum, sNum);
    }
}

function checkOperator () {
    if (autoResult) {
        calcDisplay.value = "";
        autoResult = false;
    }
}

const calcDisplay = document.querySelector("#calcDisplay");
const digitButtons = document.querySelectorAll(".digit-btn");
const operationButtons = document.querySelectorAll(".operation-btn")
const btnEqual = document.querySelector("#btnEqual");
const btnClear = document.querySelector("#btnClear");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        checkOperator();
        const digitValue = button.getAttribute("data-value");
        calcDisplay.value += digitValue;
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (op && calcDisplay.value) {
            sNum = Number(calcDisplay.value);
            fNum = operate(fNum, sNum, op);
            calcDisplay.value = fNum;
            autoResult = true;
            op = button.getAttribute("data-operation");
            console.log(op, sNum, fNum);
        }
        else {
            fNum = Number(calcDisplay.value);
            op = button.getAttribute("data-operation");
            calcDisplay.value = "";
        }
    });
});

btnEqual.addEventListener("click", () => {
    if (op && calcDisplay.value) {
        sNum = Number(calcDisplay.value);
        fNum = operate(fNum, sNum, op);
        calcDisplay.value = fNum;
        op = null;
    }
});

btnClear.addEventListener("click", () => {
    calcDisplay.value = "";
    fNum = 0;
    sNum = 0;
    op = null;
});