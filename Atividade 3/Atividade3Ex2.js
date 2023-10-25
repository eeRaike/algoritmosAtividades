const leitor = require("readline-sync");
//1: O primeiro núemro é igual ao segundo? True/False
let a = leitor.questionInt("Valor 1: ");
let b = leitor.questionInt("Valor 2: ");

console.log(`${a === b}`);

//2: O primeiro número é diferente do segundo? True/False

a = leitor.questionInt("Valor 1: ");
b = leitor.questionInt("Valor 2: ");

console.log(`${a !== b}`);

//3: O primeiro número é diferente do segundo? True/False

a = leitor.questionInt("Valor 1: ");
b = leitor.questionInt("Valor 2: ");

console.log(`${a < b}`);

//4: O primeiro número é menor que o segundo? True/False

a = leitor.questionInt("Valor 1: ");
b = leitor.questionInt("Valor 2: ");

console.log(`${a < b}`);