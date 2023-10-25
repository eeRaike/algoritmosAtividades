const rl = require("readline-sync");

function timeSpent(a,b){

if(a > b){
    return false;
} else {
    return true;
}

}

function main(){
let yesterday = rl.questionFloat("Quantas horas voce gastou no celular ontem?: ");
let today = rl.questionFloat("Quantas horas voce gastou no celular hoje?: ");
console.log(timeSpent(yesterday,today));

}
main()