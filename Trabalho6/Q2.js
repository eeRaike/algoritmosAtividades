const rl = require("readline-sync");
const pilha = [];
const hist = [];
function main(){
    let menu = true;
    while(menu){
        let select = rl.questionInt(`1.Adicionar acao \n2.Retirar acao \n3.Refazer acao \n4.Quantidade de acoes no histórico \n> \n`)
            switch(select){
                case 0:
                    menu = false
                    break;
                case 1:
                    empilhar()
                    break;
                case 2:
                    desempilhar()
                    break;
                case 3:
                    histEmpilhar()
                    break;
                case 4:
                    pilhaAmount()
                    break;
                

    }

}
}

function empilhar(){
    action = rl.question(`\n Adicionar acao> \n>`)
    pilha.push(action)
    console.log(pilha);
}
function desempilhar(){
    histAction = pilha.pop()
    hist.push(histAction)
    console.log(`\nPilha:${pilha} \nHistorico:${hist} \n`);
}

function histEmpilhar(){
    histEmp = hist.shift()
    pilha.push(histEmp)
    console.log(`\n Pilha:${pilha} \nHistorico:${hist} \n`);
}

function pilhaAmount(){
    console.log(`\n Quantidade acoes na fila: ${pilha.length} \n`);
}
main()