const rL = require("readline-sync");
const string = rL.question("Frase> ");

let res = string.match(/[aeiou]/g)

console.log(res);