let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let button = document.querySelector('button');
let result = document.querySelector('.result');

function plus (){
    result.value = parseInt(input1.value) + parseInt(input2.value);
}
button.onclick = plus;
