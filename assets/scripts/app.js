const defaultResult = 0;

let currentResult = defaultResult;


function getUserNumberInpur() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}


function add() {
    const enterederNumber = getUserNumberInpur();
    const initialResult = currentResult;
    currentResult = currentResult + enterederNumber;
    createAndWriteOutput('+', initialResult , enterederNumber)
}


function substract() {
    const enterederNumber = getUserNumberInpur();
    const initialResult = currentResult;
    currentResult = currentResult - enterederNumber;
    createAndWriteOutput('-', initialResult , enterederNumber)

}

function multiply() {
    const enterederNumber = getUserNumberInpur();
    const initialResult = currentResult;
    currentResult = currentResult * enterederNumber;
    createAndWriteOutput('*', initialResult , enterederNumber)
}


function divide() {
    const enterederNumber = getUserNumberInpur();
    const initialResult = currentResult;
    currentResult = currentResult / enterederNumber;
    createAndWriteOutput('/', initialResult , enterederNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)