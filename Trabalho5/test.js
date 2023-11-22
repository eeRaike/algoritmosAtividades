const rl = require("readline-sync")
function main() {
    let string = rl.question("Insira uma String> ")
    console.log(inverterString(string));
    console.log(reverseString(string));
}

function inverterString(str){
    var newString = "";
        for(var i = str.lenght - 1; i >= 0; i--){
            newString = newString + str[i];
        }
        return newString;


    
    }
function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString = newString + str[i];
        }
        return newString;
    }

    main()

    //PORQUE NÃO VAI??????? TA EXATAMENTE IGUAL CARALHO VO SE MATA