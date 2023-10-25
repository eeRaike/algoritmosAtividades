function soma(a,b){
   resultado = a + b
   console.log("Resultado da Soma:",resultado);
    return 0;
}
function sub(a,b){
    resultado = a - b
    console.log("Resultado da Subtração:",resultado);
    return 0;
}
function mult(a,b){
    resultado = a * b
    console.log("Resultado da Multiplicação:",resultado);
    return 0;
}
function div(a,b){
 resultado = a / b
 console.log("Resultado da Divisão:",resultado);
 return 0;
}

function main(){
let num1 = 10;
let num2 = 5;
let num3 = 8;

soma(num1,num3);
sub(num3,num2);
mult(num3,num3);
div(num1,num2);

}

main()