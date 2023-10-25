//1B:
const rl = require("readline-sync")
function a(){
    let nome = rl.question("Insira nome: ");
    let idade = rl.questionInt("Insira idade: ");
    let endereço = rl.question("Insira endereço: ");
    let profissão = rl.question("Insira profissão: ");
    
    return `Eu sou ${nome}, tenho ${idade}, moro em ${endereço} e sou ${profissão}`;
}
console.log(a());