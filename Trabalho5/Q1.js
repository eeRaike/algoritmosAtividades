const rl = require("readline-sync");
function main(){


    console.log("Resultado da soma",soma());
    console.log("Resutaldo da multiplicacao>",mult());
}

function soma(){
    val_1 = rl.questionInt("Insira o primeiro valor> ");
    val_2 = rl.questionInt("Insira o segundo valor> ");

    result = val_1 + val_2;

    return result;
}

function mult (){
    val_1 = rl.questionInt("Insira o primeiro valor> ");
    val_2 = rl.questionInt("Insira o segundo valor> ");

    result = val_1 * val_2;

    return result;

}

main()