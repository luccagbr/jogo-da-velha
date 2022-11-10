function soma(number1, number2) {
    return number1 + number2;
}

function sub(number1, number2) {
    return number1 - number2
}

function div(number1, number2) {
    return number1 / number2;
}

function mult(number1, number2) {
    return number1 * number2;
}

let result;
let op;

while(!op) {
    Number(op = prompt("Digite uma opção:\n\n1 - Somar\n2 - Subtrair\n3 - Dividir\n4 - Multiplicar\n0 - Sair"));

    switch(op) {
        case 1:
            console.log(`${result = soma(prompt("Primeiro número:"), prompt("Segundo número?"))}A soma dos números é igual a: ${result}`);
            break;

        case 2:
            console.log(`${result = sub(prompt("Primeiro número:"), prompt("Segundo número?"))}A subtração dos números é igual a: ${result}`);
            break;
        
        case 3:
            console.log(`${result = div(prompt("Primeiro número:"), prompt("Segundo número?"))}A divisão dos números é igual a: ${result}`);
            break;
        
        case 4:
            console.log(`${result = mult(prompt("Primeiro número:"), prompt("Segundo número?"))}A multiplicação dos números é igual a: ${result}`);
            break;

        case 0:
            alert("Saindoooo");
            op = false;
            break;
        
        default:
            console.log("Digite uma opção válida...");
    }
}