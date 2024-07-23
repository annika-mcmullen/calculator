//JavaScript Logic for calculator

//grab all buttons via the DOM/data-attributes
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons=document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
//keyboard support
const keyboard =document.querySelectorAll('button[value]');

//grab the 2 display values
const previousNum = document.querySelector('[data-last-number]');
const currentNum = document.querySelector('[data-current-number]');

//global variables for JS to work with
let activeInput="";
let storedInput="";
let activeOperator="";

//create event listeners for the 5 types of buttons
//user a for each loop for both Node Lists
numberButtons.forEach((num_button)=>{
    num_button.addEventListener("click",(e)=>{
        if(e.target.value==="." && activeInput.includes(".")) return
        activeInput=activeInput.concat(e.target.value);
        updateDisplay();
    });
});

operatorButtons.forEach((operator_btn)=> {
    operator_btn.addEventListener("click", (e) => {
        chooseOperation(e.target.value);
    });
});

//simple event listener for last two buttons
equalsButton.addEventListener("click", (e)=>{
    //call function to find total and update screen
    //prevent calling equal on one symbol
    if(storedInput===""|| activeInput==="") return;
    calculate();
    updateDisplay();
    clearResults();


});

//reset calculator
allClearButton.addEventListener("click",(e) =>{
    clearResults();
    updateDisplay();
});

window.addEventListener("keydown", (e) =>{
    if(e.key==="." && activeInput.includes(".")) return
    if(isNaN(Number(e.key)))return;
    activeInput=activeInput.concat(e.key);
    updateDisplay();
})

//functions using retrieved buttons
//handles the overall arithmetic logic of calculator
function calculate(){

    //convert back to float from string
    let num1=parseFloat(activeInput);
    let num2=parseFloat(storedInput);
    let total;

    //make sure we have two operands to perform the calculation

    switch (activeOperator){
        case "+":
            total = num2+num1;
            break;
        case"-":
            total = num2-num1;
            break;
        case"X":
            total = num2*num1;
            break;
        case"%":
            total = num2%num1;
            break;
        case"÷":
            if(zeroDividend(num1) === true){
                //clear the screen
                clearResults();
                updateDisplay();
                return;
            }
            else {
                total = num2 / num1;
                break;
            }
        default:
            return;
    }
    //casting to round the input to maximum 12 decimal places
    activeInput = (total).toLocaleString('fullwide',{maximumFractionDigits:13});
    activeOperator= undefined;
    storedInput="";
    updateDisplay();
}

function updateDisplay(){
    previousNum.innerHTML=storedInput;
    currentNum.innerHTML=activeInput;
}

function chooseOperation(operation){
    if(activeInput === "")return
    if(storedInput !== ""){
        calculate()
    }
    activeOperator = operation;
    if(activeOperator ==="x²"){
        squareActive(activeInput);
        return;
    }
    storedInput=activeInput;
    activeInput="";
    updateDisplay();
}
function zeroDividend(n){
    n = parseFloat(n);
    if(n===0){
        alert('Invalid dividend')
        return true;
    }
}
//works around calcualate() wanting two operands and squaring only having one
function squareActive(n){
    n=parseFloat(n);
    n**=2;
    activeInput = n.toLocaleString('fullwide',{maximumFractionDigits:13});
    activeOperator= undefined;
    storedInput="";
    updateDisplay();
}
function clearResults(){
    activeOperator="";
    activeInput="";
    storedInput="";
}