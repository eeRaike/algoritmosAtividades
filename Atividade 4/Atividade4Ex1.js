const leitor = require("readline-sync");

//Atividade de interpretação de código


//1: 

const bool1 = true;
const bool2 = false;
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a = ",resultado)

resultado = bool1 && bool2 && bool3
console.log("b = ", resultado)

resultado = !resultado && (bool1 || bool2)
console.log("c = ", resultado)

console.log("d", typeof resultado)