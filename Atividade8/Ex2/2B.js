const rl = require("readline-sync");



function maiorOuIgual(a,b){
    a = rl.questionInt("Defina a: ");
    b = rl.questionInt("Defina b: ");
    if(a >= b){
        return true;
    } else{
        return false;
    }
}

let num1 
let num2 


console.log(maiorOuIgual(num1,num2));