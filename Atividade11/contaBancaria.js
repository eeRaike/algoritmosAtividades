const rl = require("readline-sync");
function main(){

contaBancaria = { 
    titular: 0,
    saldo: 0,
    depositar: 0
}

contaBancaria.titular = rl.question("Insira o Titular> ");
contaBancaria.saldo = rl.questionInt("Insira o Saldo > ");

sacar()
}

function sacar( ){
   valor = rl.questionInt(`Saque> \n \nInsira o valor a ser sacado> `)
   contaBancaria.saldo = contaBancaria.saldo - valor
   console.log("Novo saldo:", contaBancaria.saldo);
   
}

main()