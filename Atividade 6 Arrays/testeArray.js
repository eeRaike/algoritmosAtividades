const sequence = [1,2,3,4,5,6];
const random = ["tree", 795, [0,"papow",2]];
const seiLa = ["B)",123, 0,2,1];


sequence[0] = "abacate";

console.log(sequence);


const bagulho = ["A","E","I","O","U"];

console.log(bagulho.indexOf("I"));
console.log(bagulho.indexOf("C"));



//.push = adicionar item ao array
const negocio = ["pendejo","culero"];
    console.log(negocio);
negocio.push("Chingasatumadre");
    console.log(negocio);
negocio.push("No mames","carajo");
    console.log(negocio);


//É possível adicionar usando variável, ainda n entendi a utilidade, mas é uma possibilidade
const peripecia = ["aaa","bbb"];
    console.log(peripecia);
const newLength = peripecia.push("ccc");
    console.log(peripecia);
    console.log("newLength = ",newLength);


//unshift() = adicionar item no inicio do array
peripecia.unshift("ddd");
    console.log(peripecia);


//pop() = remove o ultimo item do array
// o método pop() retorna o item que foi removido, é possível usar isso para salvar o item em questão em uma nova variável
const removido = peripecia.pop();
    console.log("removido =",removido);


//shift() = remove o primeiro item do array
    console.log(peripecia);
peripecia.shift()
    console.log("array final = ",peripecia);


//splice() = remove um item especifico utilizando o index
    console.log(peripecia);
const index = peripecia.indexOf("aaa")
if (index !== -1);
    peripecia.splice(index,1);
    console.log(peripecia);

    
//console.log(peripecia.indexOf("aaa"));
//peripecia.splice([0],1);
//console.log(peripecia);


//

