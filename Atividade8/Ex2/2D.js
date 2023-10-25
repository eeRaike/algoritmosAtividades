const rl = require("readline-sync");

let string = rl.question("Insira um texto: ");


function text(a){

    let texto = a.length;
    console.log("Tamanho:",texto);
    texto = a.toUpperCase();
    console.log("Maiuscula:",texto);

return 0;
}

text(string);