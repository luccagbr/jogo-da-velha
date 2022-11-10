function verificaNome(nome, arr) {
    if(nome == undefined) {
        console.log("Você não digitou seu nome!");
        return;
    } else if(arr.includes(nome) == true) {
        console.log(`Seu nome é ${nome} e está no array já cadastrado...`)
    } else {
        console.log("Seu nome não está cadastrado...");
    }
}

let arr = ["Lucca", "Luciana", "José", "Raphael"];

verificaNome(prompt("Digite seu nome:"), arr);