/*const display = document.querySelector('.display');
const  numBtn = document.querySelectorAll('.numBtn');


let result = '';

numBtn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        getNumBtn = e.target.innerHTML;
        console.log(getNumBtn);
        
        result = result + getNumBtn;
        display.textContent = result;
    });
    
});

function clearNum() {
    result.remove()
}*/



/*let addNum = function(a,b) {
return a + b;
}
console.log(addNum(1,68));

let minusNum = function(a, b) {
    return a - b;
};

console.log(minusNum(70,1));

let multiplyNum = function(a, b) {
    return a * b;
};
console.log(multiplyNum(6, 11));

let divideNum = function(a, b) {
    return a / b;
};

console.log(divideNum(66, 3));*/

let operate = function(a, b, operator) {
    switch(operator) {
        case 'add' : return a + b
        case 'minus' : return a - b
        case 'multiply' : return a * b
        case 'divide' : return a / b 
    }
        
} 

console.log(operate(10, 3, 'add'))