const rl = require("readline-sync");

function INSS(salBrut){

    let salDesc;

    if (salBrut <= 1302.00){
        salDesc = salBrut * 0.925
        return salDesc
    }

    else if(salBrut >= 1302.01 && salBrut <= 2571.29){
        salDesc = salBrut * 0.91
        return salDesc
    }

    else if(salBrut >= 2571.30 && salBrut <= 3856.94){
        salDesc = salBrut * 0.88
        return salDesc

    }

    else if(salBrut >= 3856.95 && salBrut <= 7507.49){
        salDesc = salBrut * 0.86
        return salDesc 
    }
}
function IRRF(salDesc){
if(salDesc < 2112.00){
    return "Isento"
}
else if(salDesc >= 2112.01 && salDesc <= 2826.65){
    salDesc = salDesc * 0.925
    return salDesc
}

else if(salDesc >= 2826,66 && salDesc <= 3751.05){
    salDesc = salDesc * 0.85
    return salDesc
}

else if(salDesc >= 3751.06 && salDesc <= 4664.68){
    salDesc = salDesc * 0.775
    return salDesc
}

else if(salDesc >= 4664.69){
    salDesc = salDesc * 0.725

    return salDesc
}

}
function ident(){
    if(salDescINSS <= 2112.00){

console.log("Salario liquido:",salDescINSS);
    }
    else{
        console.log("Salario liquido",salDescIRRF);
    }
}

function main(){

    let salBrut = rl.questionFloat("Insira o salario bruto: ");  
    console.log("Salario Bruto:",salBrut);

    salDescINSS = INSS(salBrut)
    console.log("Salario descontado (INSS):",salDescINSS);
    console.log("Valor descontado (INSS):",salBrut - salDescINSS);

    salDescIRRF = IRRF(salDescINSS)
    console.log("Salario descontado (IRRF):",salDescIRRF);
    console.log("Valor descontado (IRRF):",salBrut - salDescIRRF);

    ident(salDescIRRF)
   

    
}

main()