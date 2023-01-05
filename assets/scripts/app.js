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


addBtn.addEventListener('click', add)




