const rl = require("readline-sync");

function par(){
    a = rl.questionInt("Insira um número: ");
    if(a % 2 === 0){
return true;
    }else{
        return false;
    }
}


let num;


console.log(`É par = ${par(num)}`);