const leitor = require("readline-sync");

//1:

//A
let idadeUser = leitor.questionInt("Qual sua idade?: ");
//B
let idadeAmg = leitor.questionInt("Qual a idade de seu melhor amigo?: ");
//C
console.log("Sua idade é maior do que do seu melhor amigo?: ",`${idadeUser > idadeAmg}`);
//D
console.log("Diferença de idade",  idadeUser - idadeAmg);


//2:

//A
let par = leitor.questionInt("Insira um nuúmero par: ");
//B
console.log("Resto da divisão", `${par%2}`);
//D: O resultado sempre da 1

//3:

let idade2 = leitor.questionInt("Insira sua idade aqui: ")

let meses = idade2 * 12
let dias = meses * 30
let horas = dias * 24

console.log(`idade: ${idade2} \nIdade em Meses: ${meses} \nIdade em dias: ${dias} \nIdade em horas ${horas}`);

//4:

let a = leitor.questionInt("insira um número: ")
let b = leitor.questionInt("Outro número: ")

console.log(`
O primeiro numero é maior que segundo? ${a > b}
O primeiro numero é igual ao segundo? ${a === b}
O primeiro numero é divisível pelo segundo? ${(a%b) === 0}
O segundo numero é divisível pelo primeiro? ${(b%a) === 0}
`);

