
/*let bimestre = rl.questionInt("Selecione o Bimestre (1 a 6)");
switch(bimestre){
    case 0:
        break;
    case 1:
        alunomat.nota1 = rl.questionInt("Insira a nota para o Bimestre 1> ")
        break;
    case 2:
        alunomat.nota2 = rl.questionInt("Insira a nota para o Bimestre 2> ")
        break;
    case 3:
        alunomat.nota3 = rl.questionInt("Insira a nota para o Bimestre 3> ")
        break;
    case 4:
        alunomat.nota4 = rl.questionInt("Insira a nota para o Bimestre 4> ")
        break;
    case 5:
        alunomat.nota5 = rl.questionInt("Insira a nota para o Bimestre 5> ")
        break;
    case 6:
        alunomat.nota6 = rl.questionInt("Insira a nota para o Bimestre 6> ")
        break;
}
*/
const notasTurma = [12,100,10,200,900,1];
function compare(a,b){
    return b - a;
}
function notaMax(){
    notasTurma.sort(function(a, b){return b-a});
    return console.log(notasTurma[0]);
}

notaMax()