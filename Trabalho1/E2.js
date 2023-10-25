const rL = require("readline-sync");

var n1 = rL.questionInt("N1> ");
var n2 = rL.questionInt("N2> ");

const mult = n1 * n2;

if(n1 % 2 === 0){
    console.log(mult);
}else if (n2 % 2 === 0){
    console.log(mult);
}else{
    console.log("Error");
}
