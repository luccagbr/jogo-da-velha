class Carro {
    constructor(marca, cor, gasolina_restante) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina_restante = gasolina_restante
    }

    get getMarca() {
        return this.marca;
    }

    set setMarca(marca) {
        this.marca = marca;
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }

    get getGasolina_restante() {
        return this.gasolina_restante;
    }

    set setGasolina_restante(gasolina_restante) {
        this.gasolina_restante = gasolina_restante;
    }
}

Carro.prototype.andar_carro = function(km) {
    let cont = 0;

    for(let i = 0; i <= km; i += 50) {
        if(this.gasolina_restante < 1) {
            console.log("A gasolina acabou, vá até um posto para abastecer...");
            carro.abastecer_carro(Number(prompt("Quanto deseja abastecer?")));
            return;
        }
        console.log(`Você percorreu ${i+50}km e gastou ${cont+1} litros...`);
        this.gasolina_restante--;
        cont++;
    }
}

Carro.prototype.abastecer_carro = function(quantidade) {
    for(let i = 0; i < quantidade; i += 0.20) {
        console.log(`Abastecendo... ${i}`);
        setTimeout(1000);
    }

    console.log("Abastecido, volte sempre!!!");
}

let carro = new Carro("Audi", "Prata", 5);

console.log(carro);
carro.andar_carro(Number(prompt("Digite quantos km irá percorrer:")));