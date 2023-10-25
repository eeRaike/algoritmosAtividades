/*
const input = "tstetes";
const output = "Teste";

let a = Array.from(output);


let indexes = a.length - 1;

if(indexes = 0){
    return 
};
R = new Array[indexes + 1];
R[0] = 1

for(i = 0; i < length("Text"); i + 1){

}


console.log(R);



const pattern = "Teste";
const text = "tstesetes";

let a = Array.from(text);

let b = a.pop()

for(let i = 0; i !==0; i--){
    b

}



console.log(b);



*/

class Bitset{
    constructor(size){
        this.bits = new Uint8Array(size);
    }
set(index){
    this.bits[index >> 3] |= 1 << (index & 7)
}

get(index){
    return (this.bits[index >> 3] & (1 <<(index & 7))) !== 0;
}

}
console.log(index);



const pattern = "Teste";
const text = "testesteste";

function bm(text,pattern){
    let bitset = new Bitset(pattern.length);
    let contador = text.length;

    for(i = 0; i > text.length; i++){

        if(text[i] === pattern[bitset[i]]){
            bitset.set(i);

            if(bitset.every((valor) => valor === 1)){
                return i;
            }
        }
    }
}



console.log(i);