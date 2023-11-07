const rl = require("readline-sync");
const alunos = [];
const notasTurma = [];
function main(){
    let menu = true;
    let select;
    while(menu){
        select = rl.questionInt(`Selecione a funcao> \n1.Adicionar Aluno> \n2.Adicionar Notas> \n3.Listar Alunos> \n4.Listar Notas> \n5.Calcular Media de um Aluno> \n6.Aprovacao/Reprovacao> \n7.Estatisticas> \n0.Sair> \n> `)
        switch(select){
            case 0:
                //Saída
                menu = false;
                break;
            case 1:
                //Adicionar Aluno
                newAluno()
                break;
            case 2:
                //Adicionar notas
                addNota()
                break;
                
            case 3:
                //Listar Alunos
                alunos.forEach(listAlunos)
                break;
            case 4:
                //Listar Notas
                notas()
                break;
            case 5:
                //Mostrar media de um aluno
                mediaAluno()
                break;
            case 6:
                //Aprovação / Reprovação
                alunos.forEach(aprovReprov)
                break;
            case 7:
                //Estatisticas
                stats()
                break;
        }
    }
    
}

function newAluno(){
    let nome = rl.question(`Insira o nome do Aluno> \n> `).toUpperCase()
    
    obj_aluno ={
    name: nome,  
    }
alunos.push(obj_aluno)


console.log(alunos);
}
function addNota(){
    let professor;
    disciplina = rl.questionInt(`Selecione a Materia \n1.Matematica \n2.Portugues \n3.Historia \n4.Geo \n0.Sair \n> `)
    switch(disciplina){
        case 0:
            break;
        case 1:
            professor = rl.question("Insira o nome do Professor ")
            ndisciplina = " - math - Professor: "
            ndisciplina = ndisciplina.concat(professor)
            break;
        case 2:
            professor = rl.question("Insira o nome do Professor ")
            ndisciplina = " - port - Professor: "
            ndisciplina = ndisciplina.concat(professor)
            break;
        case 3:
            professor = rl.question("Insira o nome do Professor ")
            ndisciplina = " - hist - Professor: "
            ndisciplina = ndisciplina.concat(professor)
            break;
        case 4:
            professor = rl.question("Insira o nome do Professor ")
            ndisciplina = " - geo - Professor: "
            ndisciplina = ndisciplina.concat(professor)
            break;
    }
    alunos.forEach(listAlunos)
    aluno = rl.questionInt(`Selecione o Aluno> \n>`)
    alunomat = alunos[aluno].name.concat(ndisciplina)
    console.log(alunomat);
    alunomat = {
      
    }
    alunomat.nota1 = rl.questionInt("Insira a nota para o Bimestre 1> ")
    alunomat.nota2 = rl.questionInt("Insira a nota para o Bimestre 2> ")
    alunomat.nota3 = rl.questionInt("Insira a nota para o Bimestre 3> ")
    alunomat.nota4 = rl.questionInt("Insira a nota para o Bimestre 4> ")
    alunomat.nota5 = rl.questionInt("Insira a nota para o Bimestre 5> ")
    alunomat.nota6 = rl.questionInt("Insira a nota para o Bimestre 6> ")
    
    switch(disciplina){
        case 1:
            alunos[aluno].math = alunomat
            break;
        case 2:
            alunos[aluno].port = alunomat
            break;
        case 3:
            alunos[aluno].hist = alunomat
            break;
        case 4:
            alunos[aluno].geo = alunomat
            break;
    }

}
function notas(){
    for (let i = 0; i < alunos.length; i++) {
        console.log(`Nome:${alunos[i].name} \nMatematica ${mediaMath(i)} \nPortugues: ${mediaPort(i)} \nHistoria: ${mediaHist(i)} \nGeografia: ${mediaGeo(i)} \n`);
        
    }
    
}

function listAlunos(x){
    console.log(alunos.indexOf(x),x.name)
}
function mediaAluno(){
    alunos.forEach(listAlunos)
    aluno = rl.questionInt(`Selecione o Aluno> \n>`)
   mediaM = mediaMath(aluno)
   mediaP = mediaPort(aluno)
   mediaH = mediaHist(aluno)
   mediaG = mediaGeo(aluno)
   let mediaGeral = mediaM + mediaP + mediaH + mediaG
   mediaGeral = mediaGeral / 4
   alunos[aluno].media = mediaGeral
   notasTurma.push(mediaGeral)
   console.log(`Matematica: ${mediaM} \nPortugues${mediaP} \nHistoria ${mediaH} \nGeografia ${mediaG} \nMedia Geral: ${alunos[aluno].media}`);

}
function mediaMath(aluno){
    let mediaMath = alunos[aluno].math.nota1 + alunos[aluno].math.nota2 + alunos[aluno].math.nota3 + alunos[aluno].math.nota4 + alunos[aluno].math.nota5 + alunos[aluno].math.nota6
    mediaMath = mediaMath / 6
    return mediaMath;
}
function mediaPort(aluno){
    let mediaPort = alunos[aluno].port.nota1 + alunos[aluno].port.nota2 + alunos[aluno].port.nota3 + alunos[aluno].port.nota4 + alunos[aluno].port.nota5 + alunos[aluno].port.nota6
    mediaPort = mediaPort / 6
    return mediaPort;
}
function mediaHist(aluno){
    let mediaHist = alunos[aluno].hist.nota1 + alunos[aluno].hist.nota2 + alunos[aluno].hist.nota3 + alunos[aluno].hist.nota4 + alunos[aluno].hist.nota5 + alunos[aluno].hist.nota6
    mediaHist = mediaHist / 6
    return mediaHist;
}
function mediaGeo(aluno){
    let mediaGeo = alunos[aluno].geo.nota1 + alunos[aluno].geo.nota2 + alunos[aluno].geo.nota3 + alunos[aluno].geo.nota4 + alunos[aluno].geo.nota5 + alunos[aluno].geo.nota6
    mediaGeo = mediaGeo / 6
    return mediaGeo;
}
function aprovReprov(x){
    if(x.media > 7 && x.media <= 10){
        console.log(`${x.name}: Aprovado`);
        x.final = "Aprovado"
    } else if(x.media < 7 && x.media >=0){
        console.log(`${x.name}: Reprovado`);
        x.final = "Reprovado"
    }else if(x.media < 0 || x.media > 10){
        console.log();
    }

}
function mediaTurma(){
    let mediaTurma = 0;
    for (let i = 0; i < alunos.length; i++) {
        mediaTurma = mediaTurma + alunos[i].media
    }
    mediaTurma = mediaTurma / alunos.length
    return mediaTurma;
}
function notaMax(){
    notasTurma.sort(function(a, b){return b-a});
    return console.log(notasTurma[0]);
}
function stats(){
    console.log("Estatisticas");
    console.log("Media da Turma:", mediaTurma());
    console.log("Nota mais alta:", notaMax());
}

main()