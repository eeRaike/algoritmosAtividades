const leitor = require("readline-sync")
//Exercício 1;
//A
let meuNome;
//B
let idade;
//C
console.log(typeof meuNome);
console.log(typeof idade);
//D = Pois a variável não teve um valor definido (undefined)
//E
meuNome = leitor.question("Qual o seu nome?: ");
idade = leitor.questionInt("Qual a sua idade?: ");
//F = As variáveis foram definidas pelas linhas de código anteriores
console.log(meuNome);
console.log(idade);
//G
console.log("Olá", meuNome,", você tem", idade, "anos");

//Exercício 2;

let tomouCafe = leitor.question("Voce tomou cafe hoje?: ");
let camisaVermelha = leitor.question("Voce esta usando uma camisa vermelha?: ");
let usaSapato = leitor.question("Voce esta usando sapato?: ");

console.log("1:",tomouCafe,"2:",camisaVermelha,"3:",usaSapato);
//console.log(camisaVermelha);
//console.log(usaSapato);

//Exercício 3;

let a = 10;
let b = 25;
let c = 0;

console.log("A =",a,"B=", b,"C=", c);

//Funciona mas não parece ser a forma correta >:(
c = a;
a = b;
b = c;
c = c - b;
//c = 0;

console.log("A =",a,"B =",b,"C =",c);










