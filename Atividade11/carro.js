const rl = require("readline-sync");
function main(){

carro = { 
    marca: 0,
    modelo: 0,
    ano: 0
}

carro.marca = rl.question("Insira a Marca> ");
carro.modelo = rl.question("Insira o Modelo> ");
carro.ano = rl.questionInt("Insira o Ano> ");

informacoes()
}

function informacoes( ){
    console.log(`Marca: ${carro.marca} \nModelo: ${carro.modelo} \nAno: ${carro.ano}`);
}

main()