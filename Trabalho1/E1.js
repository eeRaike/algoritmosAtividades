const rL = require("readline-sync");


let n1 = rL.questionInt("Insira um número> ");
let n2 = rL.questionInt("Insira um número> ");

if (n1 > 0 && n2 > 0){
    console.log("resultado: ",n1 + n2);
}
else{

console.log("Error");
}

