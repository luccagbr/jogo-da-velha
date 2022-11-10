class Pessoa {
    constructor() {
        this.nome = "";
        this.cpf = "";
    }

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    func_teste() {
        console.log("Esta função realiza x operação...");
    }
}

Pessoa.prototype.nova_func = function() {
    return true;
}

class empresa extends Pessoa {
    constructor() {
        super();
        this.cnpj = "";
    }
}
let pessoa = new Pessoa();