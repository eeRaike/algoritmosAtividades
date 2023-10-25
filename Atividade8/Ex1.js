const rl = require("readline-sync");

let a = rl.questionFloat("Defina o valor de A: ");
let b = rl.questionFloat("Defina o valor de B: ");

function media(a,b){
    return (a+b) / 2;
}

let teste = media(a,b);

console.log(teste);1