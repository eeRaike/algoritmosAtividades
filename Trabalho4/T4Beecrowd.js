const rl = require("readline-sync");

function main(){
let animal;
let c1 = rl.question()
let c2 = rl.question()
let c3 = rl.question()


switch(c1){
    case "vertebrado":
        switch(c2){
            case "ave":
                switch(c3){
                    case "carnivoro":
                        console.log("aguia");
                        break;
                    case "onivoro":
                        console.log("pomba");
                        break;

                }
                break;

            case "mamifero":
                switch(c3){
                    case "onivoro":
                        console.log("humano");
                        break;
                    case "herbivoro":
                    console.log("vaca");
                    break;
                }
                break;

        }
        break;
    case "invertebrado":
        switch(c2){
            case "inseto":
                switch(c3){
                    case "hematofago":
                        console.log("pulga");
                        break;
                    case "herbivoro":
                        console.log("lagarta");
                        break;
                }
                break;
            case "anelideo":
                switch(c3){
                    case "hematofago":
                        console.log("sanguessuga");
                        break;
                    case "onivoro":
                        console.log("minhoca");
                        break;
                }
                break;
        }
        break;
}
}

main()