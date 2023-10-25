
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let a;
readline.question(``, a => {
    readline.question(``, b => {
        let x = Number(a)+Number(b);
        console.log(`X = ${x}`)

    })
});