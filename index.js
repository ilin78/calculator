"use strict"

// INPUT
const arrNum = [];
 
// List resuls
const expression = [];
// MATH
let out;
// ACT
const plus = document.getElementById("plus").value;
const min = document.getElementById("min").value;
const mult = document.getElementById("mult").value;
const split = document.getElementById("split").value;

const history = document.getElementById("history");

// Array number
function numberAdd(numbers) {
    arrNum.push(numbers);
    Input(arrNum.join(''));    
}


//percent()
function  percent() {
    input.value/=100
    return Input(input.value);
}



// PLUS OR MINUS
function split_plus() {
    if  (arrNum[0]!=='-' && ( input.value.substr(0, 1) !=='-' )) {
        input.value = '-'+input.value;
        arrNum.unshift('-');
    } else {
        input.value=input.value.substr(1);
        arrNum.shift(arrNum[0]);
    }   
    return Input(input.value);
}



// STATE FLOAT POINT
let wrapped;                                    // Хранит функцию с текущим контекстом состояния кнопки.
function floatPoint() {
    let hundlerPoint=false;                                               
    let stateNowBool;                           // Передает состояние hundlerPoint.
    return function statePoint() {  
        hundlerPoint = !hundlerPoint;
        wrapped = func.bind(hundlerPoint);      // Биндим в func, чтобы передать контекст.
        return hundlerPoint;
    }   
}
function func() { floatPoint.stateNowBool = this; } 
let count = floatPoint();
count();                                        // Запускаем цикл, чтобы объявить состояние аргументов в floatPoint.

const stateTrueFloat = function() {
    if (count()!==true){ count(); }
}

// NUMBER
class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }
    num_1() { numberAdd(1); }
    num_2() { numberAdd(2); }
    num_3() { numberAdd(3); }
    num_4() { numberAdd(4); }
    num_5() { numberAdd(5); }
    num_6() { numberAdd(6); }
    num_7() { numberAdd(7); }
    num_8() { numberAdd(8); }
    num_9() { numberAdd(9); }
    num_0() { numberAdd(0); }  
    num_point() {
        wrapped();                                  // читаем состояние кнопки и биндим в func
        if (floatPoint.stateNowBool === true) {
            numberAdd(".");
            return count();
        }
    }       
        
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(menu);


// CLEAR
function clearInput() { input.value=''; }
function clearNumbersArray(clearArray) {
    while (clearArray.length) { clearArray.pop(); }
}
function clearExp() { expressions="", resultExp=""; }

// MIX CLEAR
function clearStateAll(){
    clearNumbersArray(arrNum);
    clearInput();
    stateTrueFloat();
}
function clearAll() {
    clearStateAll();
    clearExp();
}

function Input(results) {
    document.getElementById('input').value = results;
}

function plusFunc() { Active(plus); }
function minFunc()  { Active(min);  }
function multFunc() { Active(mult); }
function splitFunc(){ Active(split);}


// MATH
let expressions = ""; 
let resultExp = "";
 

function pushExp (inputState,actState) {        
    expressions += inputState + actState;   
  
    if (expressions !== '') {
        resultExp = eval(expressions.slice(0, -1)); // Сохраняем промжуточный результат
        console.log(expressions)
        return resultExp;
    }
}

function Active(act) {
    stateTrueFloat();
    const inputState = input.value;
    const actState = act;
    clearStateAll();
    pushExp(inputState, actState)
    Input(resultExp);
}

function enter() {
    stateTrueFloat();
 
    let getResult = "=";
    Active(getResult);
 
    clearInput(); 
    Input(resultExp);
    expressions = "";
    // story(result, nextNumber);  
}



//history
// const li = function () {
//     var selectorLI = document.querySelector("ul").children;
//     history.removeChild(selectorLI[0])
// }

// function story(result, nextNumber) {
      
//     const list = document.createElement("li");

//     nextNumber = String(nextNumber);
//     out = String(out);
//     result = String(result);

//     expression.push(out+nextNumber+'='+result);

//     for (let i=0; i<expression.length; i++){
//         list.textContent =expression[i];
//         history.appendChild(list);
//     }
    
//     if (expression.length>15){
//         li()    
//     }
// }

// function historyClear() {
//     history.innerHTML="";
//     clearNumbersArray(expression);
// }




