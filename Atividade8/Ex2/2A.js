const rl = require("readline-sync");

function a(a,b){
    a = rl.questionInt("defina a: ");
    b = rl.questionInt("defina b: ");
    return a + b;

}

let num1;
let num2;

console.log(a(num1,num2));