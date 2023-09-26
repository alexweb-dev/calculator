const numberButton = document.querySelectorAll('.numbers');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const deleteAllButton = document.querySelector('#deleteAll');
const deleteCharButton = document.querySelector('#deleteChar');
const AllButton = document.querySelectorAll('.buttons');
const moreButton = document.querySelector('#more');
const lessButton = document.querySelector('#less');
const multipliedButton = document.querySelector('#multiplied');
const dividedButton = document.querySelector('#divided');
const dotButton = document.querySelector('#dot');
const add0Button = document.querySelector('#add0');
const add1Button = document.querySelector('#add1');
const add2Button = document.querySelector('#add2');
const add3Button = document.querySelector('#add3');
const add4Button = document.querySelector('#add4');
const add5Button = document.querySelector('#add5');
const add6Button = document.querySelector('#add6');
const add7Button = document.querySelector('#add7');
const add8Button = document.querySelector('#add8');
const add9Button = document.querySelector('#add9');

const showResult = document.querySelector('.result');
/*
function add(value) {
    resultat.value += value;
}
function less(value) {
    resultat.value += value;
}
function multiplied(value) {
    resultat.value += value;
}
function divided(value) {
    resultat.value += value;
}
function modulo(value) {
    resultat.value += value;
}
/*
function erase() {
    resultat.value = '';
}

function eraseAll() {
    resultat.value = '';
}
*/
add0Button.addEventListener('click', function () {
   showResult.append(0);

});

add1Button.addEventListener('click', function () {
    showResult.append(1);
 
 });