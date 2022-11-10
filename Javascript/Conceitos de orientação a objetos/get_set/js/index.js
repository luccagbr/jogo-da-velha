class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    get getCor() {
        return "A cor do animal é " + this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let duck_tolling = new Cachorro("Lua", "Duck Tolling");

duck_tolling.setCor = prompt("Digite a cor do animal:");

console.log(duck_tolling.getCor);
console.log(duck_tolling[patas]);