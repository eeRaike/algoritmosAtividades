const rl = require("readline-sync");
const fila = [];
let id = 0;

function main(){
    let menu = true;
    while(menu){
        let select = rl.questionInt(`1.Adicionar Ticket \n2.Atender Ticket \n3.Visualizar Próximo Ticket \n4.Quantidade de tickets na fila \n0.Sair \n>`)
            switch(select){
                case 0:
                    menu = false
                    break;
                case 1:
                    addTicket()
                    break;
                case 2:
                    atenderTicket()
                    break;
                case 3:
                    viewTicket()
                    break;
                case 4:
                    ticketAmount()
                    break;
                

    }

}
}

function addTicket(){
    id += 1
    ticket = rl.question(`Inserir ticket \n>`)

    Ticket = {
        ID: id,
        Ticket: ticket
    }

    fila.push(Ticket)

}

function atenderTicket(){
    if(fila.length === 0){
        console.log("A fila está vazia"); 
    }else{
        fila[0].Resposta = rl.question(`Insira a resposta \n>`)
        fila.shift()
    }

}

function viewTicket(){
    if(fila.length === 0){
        console.log("A fila está vazia"); 
    }else{
    console.log(`Proximo Ticket pendente: \nID:${fila[0].ID} Reclamação:${fila[0].Ticket}`);
    }
}
function ticketAmount(){
    console.log(`\n Quantidade de Tickets na fila: ${fila.length} \n`);
}
main()