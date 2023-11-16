const rl = require("readline-sync");
function main(){

produto = { 
    nome: "leite",
    preco: 4.30 ,
    quantidade: 0
}
console.log(`Produto: ${produto.nome} \nPreco: ${produto.preco}`);
produto.quantidade = rl.question("Insira a quantidade> ");


total(produto.quantidade)
}

function total(x){
    x = x * produto.preco
    console.log(`Produto: ${produto.leite} \nPreco: ${produto.leite} \nQuantidade: ${produto.quantidade} \nPreco: ${x}`)
}

main()