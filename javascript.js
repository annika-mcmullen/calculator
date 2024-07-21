//JavaScript for Calculator app

//Grab/store elements for DOM manipulation later
let body = document.querySelector('body');
let frame = document.querySelector('.calc-frame');
let display = document.querySelector('.display');
let btn =document.querySelector("input[type='button']");

//Following section is logic for calculations:
// add
function add(num1, num2){
    return num1 + num2;
}
//Subtract
function difference (num1, num2){
    return num1 - num2;
}
//Division
function dividend(num1, num2){
    return num1 / num2;
}
//Multiplication
function product (num1, num2) {
    return num1 * num2;
}
//Modulus
function modulus (num1, num2){
    return num1 % num2;
}
//Reversing sign
function signReverse(num1){
    return num1 * -1;
}

//Event handler to decide what operation will be  completed
