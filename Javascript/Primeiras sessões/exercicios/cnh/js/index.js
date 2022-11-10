let idade;
let cnh;
let op = false;

idade = prompt("Qual sua idade?");
while(!op){
    cnh = prompt("Você possui cnh?\n\nDigite:\n\n1 - Sim\n2 - Não");

    if(isNaN(cnh)) {
        console.log("Digite 1 ou 2 por gentileza...");
        continue;
    } else if(cnh != 1 && cnh != 2) {
        console.log("Digite alguma das opções por gentileza...");
        continue;
    }
    op = true;
}

if(cnh == 1 && idade >= 18) {
    cnh = true;
}
else{
    cnh = false;
}

if(idade >= 18 && cnh == true) {
    console.log("Você é maior de idade e possui habilitação, portanto, pode dirigir.");
} else if(idade >= 18 && cnh == false) {
    console.log("Você é maior de idade, porém não possui cnh, portanto, não pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}