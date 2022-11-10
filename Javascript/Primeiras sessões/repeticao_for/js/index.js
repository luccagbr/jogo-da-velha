let nome;
let idade;
let op;

for(let i = false; i = true;) {
    console.log("Digite o que deseja:");
    op = Number(prompt("1. Digitar nome\n2. Digitar idade\n 3. Sair"));

    switch(op){
        case 1: {
            nome = prompt("Digite seu nome:");
            break;
        }
        case 2: {
            idade = prompt("Digite sua idade:");
            break;
        }
        case 3: {
            alert("Saindo...");
            i = true;
            break;
        }
        default:
            alert("Digite uma opção válida por gentileza...");
    }
}

closed();