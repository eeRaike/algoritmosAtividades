const leitor = require("readline-sync");


// Verificando a Idade
let idade = leitor.questionInt("Insira sua idade: ");

if(idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade");
};


// Número Positivo ou Negativo

let numero = leitor.questionInt("Insira um número: ");

if(numero > 0){
    console.log("O numero é positivo");
} else if(numero < 0){
console.log("O numero é negativo");
}else {
    console.log("O numero é igual a 0");
};

// Login Simples

const senhaCor = 1234;
//const senhaCor = leitor.questionInt("Senha foda B)") dependendo do contexto :D
let senha = leitor.questionInt("Insira a senha numerica: ");

if (senha === senhaCor){
    console.log("Login bem-sucedido");
} else {
    console.log("Senha incorreta");
};

// Calculadora Básica

let cal1 = leitor.questionInt("Insira o primeiro numero: ");
let cal2 = leitor.questionInt("Insira o segundo numero: ");
let op = leitor.question("Insira o operador");
let resultado

if (op === "+"){
    resultado = cal1 + cal2
}else if(op === "-"){
    resultado = cal1 - cal2
}else if(op === "*"){
    resultado = cal1 * cal2
}else if(op === "/"){
    resultado = cal1 / cal2
};
console.log(resultado);

//Maior de três números

let a = leitor.questionInt("Numero 1: ")
let b = leitor.questionInt("Numero 2: ")
let c = leitor.questionInt("Numero 3: ")

 if(a > b, a > c){
    console.log(a);
 }else if(b > a, b > c){
    console.log(b);
 }else if(c > a, c > b){
    console.log(c);
 }

 
