const leitor = require("readline-sync");

//1:somar 3 com 4
console.log("1: Somar 3 com 4");

let num1 = leitor.questionInt("N1: "); 
let num2 = leitor.questionInt("N2: ");
let num3 
let resultado;

resultado = num1 + num2;

console.log("Resultado:", resultado);
//2: Multiplicar 3 com 5 e dividir o resultado p/2
console.log("2: Multiplicar 3 com 5 e dividir o resultado p/2");

num1 = leitor.questionInt("N1: ");
num2 = leitor.questionInt("N2: ");
num3 = leitor.questionInt("Divisor: "); //pré-revisão não tinha essa linha

resultado = num1 * num2;
resultado = resultado / num3; //pré-revisão era (resultado = resultado / 2)

console.log("Resultado:", resultado);

//3: Subtrair 5 de 4 e multiplicar o resultado p/-1
console.log("3: Subtrair 5 de 4 e multiplicar o resultado p/-1");

num1 = leitor.questionInt("N1: ");
num2 = leitor.questionInt("N2: ");
num3 = leitor.questionInt("Multiplicador: ") //pré-revisão não tinha essa linha

resultado = num1 - num2;
resultado = resultado * num3; //pré-revisão era (resultado = resultado * -1)

console.log("Resultado:", resultado);

//4: Determine o resto da Divisão de 234 p/5
console.log("4: Determine o resto da Divisão de 234 p/5");


num1 = leitor.questionInt("N1: ");
num2 = leitor.questionInt("N2: ");

resultado = num1 % num2 

console.log("Resultado:", resultado);