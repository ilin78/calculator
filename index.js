// INPUT
const arrNum = [];
// MATH
var out;
// ACT
const plus = document.getElementById("plus").value;
const min = document.getElementById("min").value;
const mult = document.getElementById("mult").value;
const split = document.getElementById("split").value;

const history = document.getElementById("history")


// Array number
function numberAdd(numbers) {
    arrNum.push(numbers);
    Input(arrNum.join(''));
}

// NUMBER
class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this );
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

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(menu);

function clearInput() { input.value=''; }
function clearNumbersArray() {
    while (arrNum.length) { arrNum.pop(); }
}

function Input(results) {
    document.getElementById('input').value = results;
}

function inputFunc() {
    const input = document.getElementById("input");    
}

function plusFunc() { Active(plus); }
function minFunc()  { Active(min);  }
function multFunc() { Active(mult); }
function splitFunc(){ Active(split);}

function Active(act) {
    out = input.value + act;
    clearAll();
}

function enter() {
    const result = eval(out.concat(input.value));
    clearInput();
    Input(result);
    story(result) 
}

function clearAll(){
    clearNumbersArray();
    clearInput();
}


//history
let sizeStory = 0;

function story(result) {
    const list = document.createElement("li");
    sizeStory++;
    if(sizeStory<16){
        list.textContent = result;
        history.appendChild(list)
        console.log(list.textContent, sizeStory)
    }
}

function historyClear() {
    sizeStory=0;
    history.innerHTML="";
}