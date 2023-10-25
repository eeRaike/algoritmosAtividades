console.time("Execution Time")
function test(n){
    let a = 0, b = 1;
    for(let i = 0; i < n; i++ ){
        [a,b] = [b, a + b]
    }
    console.log(a.toString())
}

var resultado = test(10);
console.timeEnd("Execution Time");

/*console.time("Execution Time")
function fib(n){
    let a = BigInt(0), b = BigInt(1);
    for (let i = 0; i< n; i++){
        [a, b] = [b, a + b]
    }
    console.log(a.toString());
}
var resultado = fib(10);
console.timeEnd("Execution Time");
*/