//Operations
const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const muliply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}


const operate = function(strA, op, strB) {
    let a = Number(strA);
    let b = Number(strB);
    afterEqual = true;

    if (op === '/') {
        //console.log(strB, typeof(strB));
        if (strB === '0') {
            toDisplay('>:( DIVIDED BY 0');
            inputB = '';
            return;
        }

        solution = divide(a,b);
        inputA = String(solution);
        inputB = '';
        operator = '';
        toDisplay(inputB || inputA);
        return solution;
    }
    
    if (op === '+') {
        solution = add(a,b);
        inputA = String(solution);
        inputB = '';
        operator = '';
        toDisplay(inputB || inputA);
        return solution;
    }

    if (op === '-') {
        solution = subtract(a,b);
        inputA = String(solution);
        inputB = '';
        operator = '';
        toDisplay(inputB || inputA);
        return solution;
        return subtract(a,b);
    }

    if (op === '*') {
        solution = muliply(a,b);
        inputA = String(solution);
        inputB = '';
        operator = '';
        toDisplay(inputB || inputA);
        return solution;
        return muliply(a,b);
    }

 

}

//The Math
let inputA = '0';
let inputB = '';
let operator = '';
let afterEqual = false;

const updateNumber = function(str) {

    if (inputA == '0' || afterEqual == true) {
        inputA = str;
        afterEqual = false;
        operator = '';
    }
    else if (operator != '' && afterEqual == false){
        inputB += str;
    }
    
    else {
        inputA += str;
    }
    /*
    console.log((str));
    console.log('a', inputA);
    console.log('b', inputB);
    */
    toDisplay(inputB || inputA);
}

const updateOperator = function(str) {
    //console.log(str);
    if (inputB === '0' && operator == '/') {
        toDisplay('>:( DIVIDED BY 0');
        inputA = '0';
        inputB = '';
        return;
    }


    if (inputB) {
        operate(inputA, operator, inputB);
        toDisplay(inputA);
        inputB = '';
    }
    operator = str;
    afterEqual = false;
}

//Display Screen should update on most presses, but not all. 
function toDisplay(str1) {
    document.getElementById("displayScreen").innerText = str1;
  }
let displayScreen = toDisplay(inputB || inputA);

//AC button clear slate
const clearBtn = function() {
    inputA = '0';
    inputB = '';
    operator = '';
    toDisplay(0);
}