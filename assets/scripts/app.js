const defaultResult = 0;

let currentResult = defaultResult;


function getUserNumberInpur() {
    return parseInt(usrInput.value);
}

function add() {
    const enterederNumber = getUserNumberInpur();
    const calcDescription = `${currentResult} + ${enterederNumber}`;
    currentResult = currentResult + enterederNumber;
    outputResult(currentResult, calcDescription);
}


function substract() {
    const enterederNumber = getUserNumberInpur();
    const calcDescription = `${currentResult} - ${enterederNumber}`;
    currentResult = currentResult - enterederNumber;
    outputResult(currentResult, calcDescription);
}

function multiply(params) {
    
}

function divide(params) {
    
}


addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)




