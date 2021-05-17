//initialize output
let display = document.getElementById("output");

//define variables
let displayString = [];
let newDisplayString = [];
let calcComplete

//create function that will compile input and compute output
function operate() {
    //check to make sure than the input is valid
    if((displayString[0] === "+") || (displayString[0] === "-") || (displayString[0] === "x") || (displayString[0] === "/") || (displayString[displayString.length] === "+") || (displayString[displayString.length] === "-") || (displayString[displayString.length] === "x") || (displayString[displayString.length] === "/")) {
        clearCalc();
        alert("Your input contains an operator at the beginning or end, your calculator has been cleared to avoid an error!")
    } 
    else{

    //compile input string into longer digits and operators
    //["5", "6", "+", "3", "2"] becomes --> ["56", "+", "32"]
    for(i=0; i <= displayString.length;) {
        if((displayString[i] !== "+") && (displayString[i] !== "-") && (displayString[i] !== "x") && (displayString[i] !== "/") && (displayString[i+1] !== "+") && (displayString[i+1] !== "-") && (displayString[i+1] !== "x") && (displayString[i+1] !== "/") && (i+1 < displayString.length)) {
            let item = displayString[i]+displayString[i+1];
            displayString.splice(i, i+2, item);
        }
        else {
            i++;
       }
    }
    
    //parse through array, multiply and divide as needed
    for(i=0; i <= displayString.length; i++) {
        if(displayString[i] === "x") {
            let newVal = multiply(displayString[i-1],displayString[i+1]);
            displayString.splice(i-1, 3, newVal)
        }
        else if(displayString[i] === "/") {
            let newVal = divide(displayString[i-1],displayString[i+1]);
            displayString.splice(i-1, 3, newVal)
        }
        else {
    
        }
    }

    //parse through array, add and subtract as needed
    for(i=0; i <= displayString.length; i++) {
        if(displayString[i] === "+") {
            let newVal = add(parseInt(displayString[i-1], 10),parseInt(displayString[i+1], 10));
            displayString.splice(i-1, 3, newVal)
        }
        else if(displayString[i] === "-") {
            let newVal = subtract(displayString[i-1],displayString[i+1]);
            displayString.splice(i-1, 3, newVal)
        }
        else {
    
        }
    }
    }
    display.innerHTML = displayString;
    calcComplete = 1;
}

//function to erase previous output when a new command is being input
function wipe() {
    if(calcComplete === 1){
        displayString = [];
        calcComplete = 0;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//function to monitor character limit of 14
function charCheck() {
    if(displayString.length >= 14) {
        clearCalc();
        alert("You have reached the maximum number of characters, your calculator has been cleared to avoid an error!")
    }
}

//functions to save and display numbers 0-9
function display9() {
    wipe();
    displayString.push("9");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display8() {
    wipe();
    displayString.push("8");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display7() {
    wipe();
    displayString.push("7");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display6() {
    wipe();
    displayString.push("6");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display5() {
    wipe();
    displayString.push("5");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display4() {
    wipe();
    displayString.push("4");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display3() {
    wipe();
    displayString.push("3");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display2() {
    wipe();
    displayString.push("2");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display1() {
    wipe();
    displayString.push("1");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display0() {
    wipe();
    displayString.push("0");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

//functions to display operators
function displayAdd() {
    wipe();
    displayString.push("+");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displaySub() {
    wipe();
    displayString.push("-");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displayMult() {
    wipe();
    displayString.push("x");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displayDiv() {
    wipe();
    displayString.push("/");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

//function to clear display
function clearCalc() {
    displayString = [];
    display.innerHTML = displayString;
}

//event listners for each button
const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', () => {
    display9();
});

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', () => {
    display8();
});

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', () => {
    display7();
});

const btn6 = document.querySelector('#six');
btn6.addEventListener('click', () => {
    display6();
});

const btn5 = document.querySelector('#five');
btn5.addEventListener('click', () => {
    display5(); 
});

const btn4 = document.querySelector('#four');
btn4.addEventListener('click', () => {
    display4();
});

const btn3 = document.querySelector('#three');
btn3.addEventListener('click', () => {
    display3();
});

const btn2 = document.querySelector('#two');
btn2.addEventListener('click', () => {
    display2();
});

const btn1 = document.querySelector('#one');
btn1.addEventListener('click', () => {
    display1();
});

const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => {
    displayAdd();
});

const btnSub = document.querySelector('#subtract');
btnSub.addEventListener('click', () => {
    displaySub();
});

const btnMult = document.querySelector('#multiply');
btnMult.addEventListener('click', () => {
    displayMult();
});

const btnDiv = document.querySelector('#divide');
btnDiv.addEventListener('click', () => {
    displayDiv();
});

const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', () => {
    console.log(displayString);
    operate();
});

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    clearCalc();
});

const btn0 = document.querySelector('#zero');
btn0.addEventListener('click', () => {
    display0();
});
