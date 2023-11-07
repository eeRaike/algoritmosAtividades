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
                console.log("aveteste");
                switch(c3){
                    case "carnivoro":
                        console.log("aguia");
                        break;
                    case "onivoro":
                        console.log("pomba");
                        break;

                }

            case "mamifero":
                console.log("mamiferoteste");
                switch(c3){
                    case "onivoro":
                        console.log("humano");
                        break;
                    case "herbivoro":
                    console.log("vaca");
                    break;
                }

        }
    case "invertebrado":
}
}

main()