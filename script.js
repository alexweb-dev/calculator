const numberButton = document.querySelectorAll('.numbers');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const deleteAllButton = document.querySelector('#deleteAll');
const deleteCharButton = document.querySelector('#deleteChar');
const allButton = document.querySelectorAll('.buttons');
const moreButton = document.querySelector('#more');
const lessButton = document.querySelector('#less');
const multipliedButton = document.querySelector('#multiplied');
const dividedButton = document.querySelector('#divided');
const moduloButton = document.querySelector('#modulo')
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

let showResult = document.querySelector('.result');

let resultString = "";

add0Button.addEventListener('click', function () {
   showResult.append(0);

});

add1Button.addEventListener('click', function () {
    showResult.append(1);
 
 });

 add2Button.addEventListener('click', function () {
    showResult.append(2);
 
 });

 add3Button.addEventListener('click', function () {
    showResult.append(3);
 
 });

 add4Button.addEventListener('click', function () {
    showResult.append(4);
 
 });

 add5Button.addEventListener('click', function () {
    showResult.append(5);
 
 });

 add6Button.addEventListener('click', function () {
    showResult.append(6);
 
 });

 add7Button.addEventListener('click', function () {
    showResult.append(7);
 
 });

 add8Button.addEventListener('click', function () {
    showResult.append(8);
 
 });

 add9Button.addEventListener('click', function () {
    showResult.append(9);
 
 });

 dotButton.addEventListener('click', function () {
    showResult.append(".");
 
 });

 moreButton.addEventListener('click', function () {
    showResult.append(" + ");
 
 });

 lessButton.addEventListener('click', function () {
    showResult.append(" - ");
 
 });

 multipliedButton.addEventListener('click', function () {
    showResult.append(" * ");
 
 });

dividedButton.addEventListener('click', function () {
    showResult.append(" / ");
 
 });

 moduloButton.addEventListener('click', function () {
    showResult.append(" % ");
 
 });

 equalButton.addEventListener('click', function () {
    resultString = showResult.innerHTML.split(' ');

    let resultNumber = 0;
    let resultOperator = "";
        
    for (let i = 10; i < resultString.length; i++) {
        if (resultString[i] === "+") {
            resultOperator = "+";
        }
        else if (resultString[i] === "-") {
            resultOperator = "-";
        }
        else if (resultString[i] === "*") {
            resultOperator = "*";
        }
        else if (resultString[i] === "/") {
            resultOperator = "/";
        }
        else if (resultString[i] === "%") {
            resultOperator = "%";
        }
        else{
            if (i == 10) {
                resultNumber = parseFloat(resultString[i]);              
            }
            else{
                switch (resultOperator) {
                    case "+":
                        resultNumber = resultNumber + parseFloat(resultString[i]);
                    break;
                        
                    case "-":
                        resultNumber = resultNumber - parseFloat(resultString[i]);
                    break;

                    case "*":
                        resultNumber = resultNumber * parseFloat(resultString[i]);
                    break;
                    case "/":
                        resultNumber = resultNumber / parseFloat(resultString[i]);
                    break;
                    case "%":
                        resultNumber = resultNumber % parseFloat(resultString[i]);
                    break;
                   /* case "":
                        resultNumber = parseFloat(resultString[i]);
                    break;*/
                    default:
                        break;
                }
            }
        }
    
    }
    resultNumber = resultNumber.toFixed(5);
    showResult.innerHTML = resultNumber;
 });
 
 deleteCharButton.addEventListener('click', function () {
    let currentContent = showResult.innerHTML;
    if (currentContent.length > 0) {
        let newContent = "";
        for (let i = 0; i < currentContent.length - 1; i++) {
            newContent += currentContent[i];
        }
        showResult.innerHTML = newContent;
    }
});

deleteAllButton.addEventListener('click', function () {
    showResult.innerHTML = "";
    resultNumber = 0; // Réinitialise resultNumber à zéro
    resultString = ""; // Réinitialise resultString à une chaîne vide
});
