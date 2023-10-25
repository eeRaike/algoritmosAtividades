function main(){
    const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    listOgArray(original)
    list10(original)
    pares(original)
    string(original)
    }
    

function listOgArray(og){
for(let i = 0; i < og.length; i++){
console.log("Og Array>",og[i]);
}
}
function list10(og){
for(let i = 0; i < og.length; i++){
    b = og[i] / 10
        console.log("List10>",b);
}
}
function pares(og){
    const par = [];
    for(let i = 0; i < og.length; i++){
        if(og[i] % 2 === 0 ){
            par.push(og[i])
        }
    }
    console.log(par);
}
function string(og){
    for(let i = 0; i < og.length; i++){
        console.log(`O elemento do index ${i} é ${og[i]}`);
    }
}

function maxMin(){
  

}

main()