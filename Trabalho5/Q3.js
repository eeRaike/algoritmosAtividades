const rl = require("readline-sync");
const pessoas = [];
function main(){
while(pessoas.length < 2){
    let nome = rl.question("Insira o nome");
    let idade = rl.questionInt("Insira a idade");
    let profissao = rl.question("Insira a profissao");

        pessoa = {

        Nome: nome,
        Idade: idade,
        Profissao: profissao
        }
        pessoas.push(pessoa)
    } 
    pessoas.forEach(apresentar)
}

function apresentar(pessoa){
    console.log(`Nome: ${pessoa.Nome} \nIdade: ${pessoa.Idade} \nProfissao: ${pessoa.Profissao}`);
}

main()