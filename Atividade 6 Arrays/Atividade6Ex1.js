const leitor = require("readline-sync");

//length = retorna caracteres da String (incluindo espaços)
//toLowerCase() = transforma os caracteres da String em minusculos
//toUpperCase() = o contrário do LowerCase
//trim() = remove os espaços antes e depois da String
//const email = " blablabla " > "blablabla"
//includes() = procura um conjunto de caracteres e retorna true/false;
//replaceAll() = troca x por y na String


//Exercicio 1

let nome = leitor.question("Insira seu nome: ");
let corFav = leitor.question("Insira sua cor favorita: ");

console.log("A cor favorita de", nome,"é", corFav);
console.log(`A cor favorita de ${nome} é ${corFav}`);

//Exercicio 2


let frase = leitor.question("Insira uma frase: ");

console.log(frase.toUpperCase(),frase.replaceAll("o","i"),frase.length);


//Exercicio 3

const cachorro = ["cachorro1","cachorro2","cachorro3","cachorro4","cachorro5"];
let cN = leitor.questionInt("Insira um número de 0 a 4: ");
console.log(cachorro[cN]);


//Exercicio 4

const sequence = [1,2,3,4,5,6];
console.log(sequence);
//1: Determine o tamanho do array
console.log("Tamanho Array: ",sequence.length);


//2: Adicione o número 7
console.log("Adicionou 7:");
sequence.push(7);
console.log(sequence);

//3: Remova os números 4 e 5
let n = sequence.indexOf(4);

console.log("Removeu 4 e 5");
sequence.splice(n,2);

//4: Determine o novo tamanho do array
console.log(sequence, "\n","Tamanho Array:",sequence.length);

