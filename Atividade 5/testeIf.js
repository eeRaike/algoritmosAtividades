const leitor = require("readline-sync")

let a = leitor.questionInt("Primeiro valor:")
let b = leitor.questionInt("Segundo valor:")

if(a === b){

    console.log(a + b);
} else if(a > b){   
    console.log(a - b); 
}else{
    console.log(a / b);
}

