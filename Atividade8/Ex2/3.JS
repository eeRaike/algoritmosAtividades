const rl = require("readline-sync");

function soma(a,b){
   x = a + b 
    return x;
}
function diff(a,b){
    x = a - b;
    return x;
}
function multi(a,b){
    x = a * b;
    return x;
}
function div(a,b){
    x = a / b;
    return x;
}

let num1 = rl.questionInt("Insira um numero: ");
let num2 = rl.questionInt("Insira um numero: ");
let x;


console.log(`Soma = ${soma(num1,num2)} \nDiferença = ${diff(num1,num2)} \nMultiplicação = ${multi(num1,num2)} \nDivisão = ${div(num1,num2)}`);