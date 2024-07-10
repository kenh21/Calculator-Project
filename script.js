class calculator {
    constructor(pastOperation, currentOperation) {
        this.pastOperation = pastOperation
        this.currentOperation = currentOperation
        this.clearAll()
    }

clearAll() {
    this.currentOperation = ''
    this.pastOperation = ''
    this.operation = undefined
}
delete() {

}
insertNum(num) {

}

selectOperation(operation) {

}

calculate() {

}

updateDisplay() {

}
}


const numBtns = document.querySelectorAll('num');
const operBtns = document.querySelectorAll('operator');
const equalBtn = document.querySelector('operator-equals');
const delBtn = document.querySelector('operator-del');
const acBtn = document.querySelector('operator-ac');
const pastOperation = document.querySelector('past-operation');
const currentOperation = document.querySelector('current-operation');


