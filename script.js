let display = document.getElementById("output");
let displayString = [];
let newDisplayString = [];

function operate() {  

    for(i=0; i <= displayString.length;) {
        if((displayString[i] !== "+") && (displayString[i] !== "-") && (displayString[i] !== "x") && (displayString[i] !== "/") && (displayString[i+1] !== "+") && (displayString[i+1] !== "-") && (displayString[i+1] !== "x") && (displayString[i+1] !== "/") && (i+1 < displayString.length)) {
            let item = displayString[i]+displayString[i+1];
            displayString.splice(i, i+2, item);
        }
        else {
            i++;
       }
    }

    console.log(displayString);
    
    
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
    display.innerHTML = displayString;
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

function charCheck() {
    if(displayString.length >= 14) {
        clearCalc();
        alert("You have reached the maximum number of characters, your calculator has been cleared to avoid an error!")
    }
}

function display9() {
    displayString.push("9");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display8() {
    displayString.push("8");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display7() {
    displayString.push("7");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display6() {
    displayString.push("6");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display5() {
    displayString.push("5");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display4() {
    displayString.push("4");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display3() {
    displayString.push("3");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display2() {
    displayString.push("2");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display1() {
    displayString.push("1");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function display0() {
    displayString.push("0");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displayAdd() {
    displayString.push("+");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displaySub() {
    displayString.push("-");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displayMult() {
    displayString.push("x");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function displayDiv() {
    displayString.push("/");
    newDisplayString = displayString.join(" ");
    display.innerHTML = newDisplayString;
    charCheck();
}

function clearCalc() {
    displayString = [];
    display.innerHTML = displayString;
}

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
