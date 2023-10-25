const rl = require("readline-sync");

function main(){
    let x = true;
    let y 
    let j
    while(x){                      
        y = rl.questionInt("Insira uma nota de 0 a 100>  ");
        if(y >= 0 && y <= 20){
            j = 'F';
         
        }else if(y > 20 && y <= 40){
            j = 'D';
          
        }else if(y > 40, y <= 60){
            j = 'C';
            
        }else if(y > 60 && y <=80){
            j = 'B';
         
        }else if(y > 80 && y <= 100){
            j = 'A';
            
        }else{
            console.log("?");
        }


        switch(j){ 
            case 'F':
                console.log(`A sua nota é F`);
                x = false;
                break;
            case 'D':
                console.log(`A sua nota é D`);
                x = false;
                break;
            case 'C':
                console.log(`A sua nota é C`);
                x = false;
                break;
            case 'B':
                console.log(`A sua nota é B`);
                x = false;
                break;
            case 'A':
                console.log(`A sua nota é A`);
                x = false;
                break;
        }

    }

    }



main()