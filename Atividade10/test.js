/*let n
function isPrime(number){
  var count = 0;
  for(var i = 1;i<=number;i++)    {
     if(number%i == 0){
        count = count + 1;
     }
  }
  if(count == 2){
     console.log(n = number); 
  }
  else{
     
  }
}

function Primos(){
  for(var i = 0; i < 100; i++){

  }
}



console.log(isPrime(100));
*/

let i, j, flag; 
  
for (i = 2; i <= 100; i++) { 
    if (i == 1 || i == 0) 
        continue; 
  
    // flag variable to tell 
    // if i is prime or not 
    flag = 1; 
  
    for (j = 2; j <= i / 2; ++j) { 
        if (i % j == 0) { 
            flag = 0; 
            break; 
        } 
    } 
  
    // flag = 1 means i is prime 
    // and flag = 0 means i is not prime 
    if (flag == 1) 
        console.log(i); 
}


function Primos(){
  for(i = 2; i <= 100; i++){
    if( i === 1 || i === 0)
    flag = 1;
  for(j = 2; j <= i / 2; j++){
    if(i % j === 0){
      flag = 0;
      break;
    }
  }
  }
  if(flag === 1){
    console.log();
  }
}