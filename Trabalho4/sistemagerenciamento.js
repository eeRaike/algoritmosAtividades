const rl = require("readline-sync")
const alunos = []

function main(){

let menu = true;
let select;

 while (menu) {
    select = rl.questionInt(`Selecione a funcao> \n1.Adicionar Aluno> \n2.Listar Alunos> \n3.Adicionar notas> \n0.Sair> \n> `)
    switch(select){
        case 0:
             menu = false;
             break;
        case 1:
            newAluno()
            break;
        case 2:
        alunos.forEach(list)
            break;
        case 3:
            addNota()
            break;

    }
 }

}

function newAluno(){

let nome = rl.question("Insira o nome do aluno> ").toUpperCase()
let bi1,bi2,bi3,bi4,bi5,bi6
nome = {Name: nome, nota1: bi1, nota2: bi2, nota3: bi3, nota4:bi4, nota5: bi5, nota6: bi6}
alunos.push(nome);
console.log(alunos);



}

function addNota(){
    aluno = rl.question("Selecione o Aluno");
    console.log(alunos.find())


}
function list(x){

    console.log(x.Name);

}
main()