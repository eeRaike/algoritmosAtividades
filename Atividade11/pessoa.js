const rl = require("readline-sync");
function main(){

pessoa = { 
    nome: 0,
    idade: 0,
    profissao: 0
}

pessoa.nome = rl.question("Insira o nome> ");
pessoa.idade = rl.questionInt("Insira a Idade> ");
pessoa.profissao = rl.question("Insira a profissao> ");

apresentar()
}

function apresentar( ){
    console.log(`Nome: ${pessoa.nome} \nIdade: ${pessoa.idade} \nProfissao: ${pessoa.profissao}`);
}

main()