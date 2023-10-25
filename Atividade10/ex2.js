function main(){
const rl = require("readline-sync");

let num = rl.questionInt("Insira um numero> ")
let result;


for(let i = 1; i <= 10; i++){
    result = num * i
    console.log(`${num} X ${i} = ${result}`);
}



}
main()