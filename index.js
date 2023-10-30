let items = document.querySelectorAll('.items');
let numbers = document.querySelectorAll('.numbers');
let result = document.querySelector('.result span');

let firstValue = " ";
let isFirstValue = false;
let secondValue = " ";
let isSecondValue = false;
let sign = " ";
let resultValue = 0;

for (let i = 0; numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr)
        }
    })
}

function getFirstValue (el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue
}

function getSecondValue (el){
    if (firstValue != "" && sign !=""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue
    }
}

function getSign (){
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.targer.getAttribute('value');
            isFirstValue = true
        }) 
    }
}
getSign();

equels.addEventListener('click', () =>{
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secondValue;
    } else if (sign === "-"){
        
    }
})
