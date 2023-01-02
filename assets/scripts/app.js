const defaultResult = 0;
const currentResult = defaultResult;


// let myResult = 0;

// function addNumbers(number1, number2){
//    myResult = number1 + number2;
//    outputResult(myResult, '');
// }

// addBtn.addEventListener("click", addNumbers);

function add(num1,num2) {
   const result = num1 + num2;
   alert(`The result of addition is ${result}`)
}
add(1,3);
add(2,4)

currentResult = (currentResult + 10)*3/2-1;

let calculationDescription = `(${defaultResult}+10)*3/2-1`

outputResult(currentResult, calculationDescription);