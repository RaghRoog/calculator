let firstOperand = '';
let currentOperation = null;
let shouldResetScreen = false;
let deleteButton = document.querySelector('.delete');
function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1)
  }
  deleteButton.addEventListener('click', deleteNumber);
  let clearButton = document.querySelector('.clear');
  function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
  }
  clearButton.addEventListener('click', clear);
function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
  }
function adding(a, b){
   return a+b;
}
function substracting(a, b){
    return a-b;
}
function multiplying(a, b){
    return a*b;
}
function dividing(a, b){
    return a/b;
}
function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    if(operator === '+'){
       return adding(a, b);
    }else if(operator === '-'){
       return substracting(a, b);
    }else if(operator === '*'){
       return multiplying(a, b);
    }else if(operator === '/'){
       return dividing(a, b);
    }
}
function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

let currentOperationScreen = document.querySelector('.current-operation-screen')
let lastOperationScreen = document.querySelector('.last-operation-screen');
let numButtons = document.querySelectorAll('.num');

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
  }
numButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent)));

let operators = document.querySelectorAll('.operator');

operators.forEach((button)=>
button.addEventListener('click', () => setOperation(button.textContent)));

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
  }
  function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent =roundResult(
        operate(currentOperation, firstOperand, secondOperand)
      )
    
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
  }

let equalsButton = document.getElementById('equal');
equalsButton.addEventListener('click', evaluate);

let point = document.querySelector('.dot');
point.addEventListener('click', appendPoint);

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
      currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
  }
