const rl = require("readline-sync")
function main() {
    let string = rl.question("Insira uma String> ")
    console.log(inverterString(string));
    console.log(contarVogais(string));
}

function inverterString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString = newString + str[i];
        }
        return newString;
    }
function contarVogais(str){
    test = str.match(/[aeiou]/gi)
    return console.log("Quantidade de vogais:"),test.length;
};

    main()