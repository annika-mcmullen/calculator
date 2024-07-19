//JavaScript for Calculator app

//Apply grid-item class to all buttons via DOM manipulation
let body = document.querySelector('body');
for (let i =0; i<20; i++) {
    const button = document.querySelector('button');
    button.className = "grid-item";
    body.appendChild(button);
}

//following section is logic for calculations:
// add
function add(num1, num2){
    return num1 + num2;
}
//subtract
function difference (num1, num2){
    return num1 - num2;
}
//division
function dividend(num1, num2){
    return num1 / num2;
}
//multiplication
function product (num1, num2) {
    return num1 * num2;
}

function modulus (num1, num2){
    return num1 % num2;
}

//reversing sign
function signReverse(num1){
    return num1 * -1;
}



