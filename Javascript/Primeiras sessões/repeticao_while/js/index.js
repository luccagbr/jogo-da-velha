let pessoa = {
    nome: "",
    idade: "",
    cpf: ""
}
let i, op;

while(pessoa.nome == null && pessoa.idade == null && pessoa.cpf == null){
    console.log("O que deseja fazer?");
    op = Number(prompt("1. Digitar nome\n2. Digitar idade\n3. Digitar cpf"));

    switch(op) {
        case '1': {
            pessoa.nome = prompt("Digite seu nome:");
            break;
        }
        case '2': {
            pessoa.idade = prompt("Digite sua idade:");
            break;
        }
        case 3: {
            pessoa.cpf = prompt("Digite seu cpf:");
            break;
        }
        default: {
            alert("Digite algo válido por gentileza...");
        }
    }

}