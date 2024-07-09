/*let operator = document.querySelectorAll('.operateBtn');

operator.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        getOperatorBtn = e.target.innerHTML;
        console.log(getOperatorBtn);
        
        return getOperatorBtn;
    });

});*/


let operate = function(a, b, operator) {
    
    switch(operator) {
        case 'add' :  return a + b
        case 'minus' : return a - b
        case 'multiply' :  return a * b
        case 'divide' :  return a / b 
    }
    
} 

console.log(operate(5,5, 'add'))
