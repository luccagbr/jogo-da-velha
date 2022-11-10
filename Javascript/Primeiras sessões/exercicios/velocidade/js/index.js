const velocidade_max = 80;

let velocidade_atual;

velocidade_atual = prompt("Qual velocidade o radar pegou do ultimo motorista?");

if(velocidade_atual > velocidade_max) {
    console.log(`O motorista recebeu uma multa pois estava a ${velocidade_atual}km/h.\nA velocidade permitidade é de ${velocidade_max}km/h!`)
}