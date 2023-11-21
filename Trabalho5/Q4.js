const numeros = [1,2,3,4,5]

function somarArray(){
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
       
        soma+=numeros[i]
        console.log(soma);
    }
    console.log("Soma total: ", soma);
    }
    


somarArray()