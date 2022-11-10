let a = 7;
let b = 8;
let c = 5;
let d = 5;
let soma = a + b + c + d;

if(soma / 3 >= 7) {
    console.log("Parabéns, você atingiu a média e está aprovado!\n\n Sua media foi: " + (soma/3).toFixed(2));
} else if(soma / 3 >= 5) {
    console.log("Você está de prova final!\n\n Sua media foi: " + (soma/3).toFixed(2));
} else {
    console.log("Você está reprovado!\n\n Sua media foi: " + (soma/3).toFixed(2));
}
