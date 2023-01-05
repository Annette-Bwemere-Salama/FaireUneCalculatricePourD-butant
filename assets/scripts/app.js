const defaultResult = 0;

let currentResult = defaultResult;


function add() {
    currentResult = currentResult + userInput.value;

}



// let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

// add()

addBtn.addEventListener('click', add)
outputResult(currentResult, calculationDescription);




