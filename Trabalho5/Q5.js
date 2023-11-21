// Agenda de Contatos
const rl = require("readline-sync");
const agenda = [];
const cttPend = [];
function main(){
    let menu = true;
    while(menu){
        let select = rl.questionInt(`Selecione a funcao> \n1.Criar contato \n2.Listar contatos \n3.Adicionar contato \n0.sair \n> `)
            switch(select){
                case 0:
                    menu = false
                    break;
                case 1:
                    criarContato()
                    break;
                case 2:
                    agenda.forEach(listarContato)
                    break;
                case 3:
                    adicionarContato()
                    break;
                

    }

}


    
};

function criarContato(){
    let nome = rl.question("Insira o nome do novo contato").toUpperCase();
    let numero = rl.questionInt("Insira o numero do contato");
    let email = rl.question("Insira o Email do contato");

    contato = { 

        Nome: nome,
        Telefone: numero,
        Email: email

    }
    cttPend.push(contato)
    console.log(contato);
};
function adicionarContato(){
    console.log("Contatos pendentes:");
    cttPend.forEach(listarContato)
    console.log("");


    for (let i = 0; i < cttPend.length; i++) {
        listarContato(cttPend[0]);
        let y = rl.questionInt(`Adicionar contato?> \n1.Sim \n2.Nao \n>`)
        switch(y){
                case 1:
                    console.log(`${cttPend[0].Nome} Adicionado aos contatos`);
                    let newCtt = cttPend.shift()
                    agenda.push(newCtt)
                    y = false;
                    break;
                case 2:
                    let z = rl.questionInt(`${cttPend[0].Nome} Sera deletado, tem certeza? \n1.Sim \n2.Nao \n>`)
                    switch(z){
                        case 1:
                            cttPend.shift()
                            break;
                        case 2:
                            y = false;
                            break;
                    }

        }
        
    }

       
    
}
function listarContato(contato){
    console.log(`Nome: ${contato.Nome} Telefone: ${contato.Telefone} Email: ${contato.Email} `);
};

main()