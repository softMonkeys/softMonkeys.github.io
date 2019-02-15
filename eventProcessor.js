var decimal = document.getElementById('decimal');

var leftBracket = document.getElementById('leftBracket');
var rightBracket = document.getElementById('rightBracket');
var backSpace = document.getElementById('delete');
var clear = document.getElementById('clear');

var output = document.getElementById('display_results');
var historyy = document.getElementById('history');


var displayValue = '0';
var canAddDecimal = true;

var numberButton = document.getElementsByClassName('number');
var operatorButton = document.getElementsByClassName('operator');


// handles the decimal button
decimal.onclick = () => {
    if(canAddDecimal == true){
        displayValue = displayValue + '.';
        output.innerText = displayValue;
        canAddDecimal = false;
    }
}

// handles the clear button
clear.onclick = () => {
    displayValue = '0';
    output.innerHTML = displayValue;
    canAddDecimal = true;
}

// handles the delete button
backSpace.onclick = () => {   
    displayValue = displayValue.slice(0, displayValue.length - 1);
    
    if(displayValue === ''){
        displayValue = '0';
    }

    output.innerText = displayValue;
}


// process the numbers
var updateOutput = (clickObj) => {
    var value = clickObj.target.innerText;
    if(displayValue == '0' || displayValue === 'undefined'){
        displayValue = '';      // clear the default value 0
    }
    displayValue = displayValue + value;
    output.innerText = displayValue;
}

// process the operation signs
var operatorProcess = (clickObj) => {
    var value1 = clickObj.target.innerText;
    if(value1 == '+'){
        displayValue = displayValue + '+';
        output.innerText = displayValue;
        canAddDecimal = true;
    }else if(value1 == '-'){
        displayValue = displayValue + '-';
        output.innerText = displayValue;
        canAddDecimal = true;
    }else if(value1 == '*'){
        displayValue = displayValue + '*';
        output.innerText = displayValue;  
        canAddDecimal = true;
    }else if(value1 == '/'){
        displayValue = displayValue + '/';
        output.innerText = displayValue;
        canAddDecimal = true;
    }else if(value1 == '='){
        try{
            var result = eval(displayValue);
        }catch(e){
            console.log("Invalid Operation");
            canAddDecimal = true;
        }
        historyy.innerText = "History: " + displayValue + " = " + result;
        displayValue = '' + result;
        output.innerText = displayValue;
    }
}

for(let i = 0; i < numberButton.length; i++){
    numberButton[i].addEventListener('click', updateOutput, false);
}

for(let j = 0; j < operatorButton.length; j++){
    operatorButton[j].addEventListener('click', operatorProcess, false);
}
