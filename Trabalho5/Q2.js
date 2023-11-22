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
    vogais = str.match(/[aeiou]/gi)
    return console.log("Quantidade de vogais:"),vogais.length;
};

    main()

/*
The beginning and ending / are called delimiters. They tell the interpreter where the regex begins and ends. Anything after the closing delimiter is called a "modifier," in this case g and i.

The g and i modifiers have these meanings:

g = global, match all instances of the pattern in a string, not just one
i = case-insensitive (so, for example, /a/i will match the string "a" or "A".
*/