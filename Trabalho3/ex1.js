const rl = require("readline-sync");
function main(){
  pets()
}
function pets(){
    const bichos = []
    let bichinhos = rl.questionInt("Quantos bichinhos de estimação você tem?");

    if(bichinhos >= 1){
        for(let i = 0; i < bichinhos; i++){
            let a = rl.question("Insira o nome deles um por um")
            bichos.push(a);
            }
       
    }else{
         console.log("Que pena! Você pode adotar um pet!");
    }
    console.log(bichos);
    }

main()
