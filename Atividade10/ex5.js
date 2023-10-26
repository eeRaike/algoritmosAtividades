function main(){
    const rl = require("readline-sync");
    
    let n = rl.questionInt("Insira um numero ");
    console.log(fatorial(n));
    }
    
    function fatorial(n){
        for(let i = n - 1; i > 0; i--){
            n *= i
        }
        return n
        
    }
    
    main()