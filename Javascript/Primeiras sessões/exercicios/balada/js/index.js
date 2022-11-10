let idade;

Number(idade = prompt("Digite sua idade:"));

if(idade >= 18) {
    console.log(`Você possui ${idade} anos, pode entrar... Divirta-se!`);
} else {
    console.log("Você não possui 18 anos, peço que se retire por gentileza...");
}