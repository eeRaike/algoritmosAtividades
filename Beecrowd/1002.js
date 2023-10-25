const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let pi = 3.14159
let area;
let raio;
let result;

readline.question(``, raio =>{
    area = pi * (raio * raio)
    result = area.toFixed(4)
    console.log(`A=${result}`);    
})