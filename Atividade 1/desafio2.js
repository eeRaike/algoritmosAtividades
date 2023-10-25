const leitor = require("readline-sync");

let a = leitor.question("Variavel 1 = "); //poderia também definir diretamente a variável
let b = leitor.question("Variavel 2 = ");

x = a * b
y = a / b


console.log(x,"É o resultado da multiplicação");
console.log(y,"É o resultado da Divisão");