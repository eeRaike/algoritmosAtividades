const rL = require("readline-sync");
var n1 = rL.questionInt("N1>");
var div = rL.questionInt("Div>");

var res = n1 / div;

if(div !==0){
    console.log(res);
}else {
    console.log("Error");
}