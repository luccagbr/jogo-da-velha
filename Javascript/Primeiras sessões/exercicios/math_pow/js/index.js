let base;
let expoente;
let result;

base = prompt("Digite um número para a base:");
expoente = prompt("Digite um número para o expoente:");
result = Math.pow(base, expoente);

if(result % 2 == 0) {
    console.log(`O número ${base} com expoente ${expoente}, retorna o número ${result}, que é par...`);
} else {
    console.log(`O número ${base} com expoente ${expoente}, retorna o número ${result}, que é impar...`);
}