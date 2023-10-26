function main(){
showPrime()

}



function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

     for (let i= 2; i < num; i++) {
        if (num % i === 0) {
            return false;
       }
     }
     return true;
    }

function showPrime(){
for(i = 1; i <= 100; i++){
    if(isPrime(i)){
     console.log(i,"é primo"); 
       }
   } 
   } 
    


main()