let cont_id = 0;

class Endereco {
    constructor(pais, estado, cidade, bairro, cep) {
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.bairro = bairro;
        this.cep = cep;
    }
}

class Pessoa {
    constructor(nome, cpf, cep, num_casa, enderecos) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = this.pesquisaEndereco(cep, enderecos);
        this.num_casa = num_casa;
    }

    get getNome() {
        return this.nome;
    }

    set setNome(nome) {
        this.nome = nome;
    }

    get getCpf() {
        return this.cpf;
    }

    set setCpf(cpf) {
        this.cpf = cpf;
    }

    get getNum_casa() {
        return this.num_casa;
    }

    set setNum_casa(num_casa) {
        this.num_casa = num_casa;
    }
}

Pessoa.prototype.pesquisaEndereco = function(cep, todos_enderecos) {
    for(let cont in todos_enderecos) {
        if(todos_enderecos[cont].cep == cep) {
            console.log("Endereço localizado!");
            console.log(todos_enderecos[cont].bairro);
            return todos_enderecos[cont];
        }
    }
    console.log("O endereço não foi localizado, por gentileza, informe um existente em nossa base de dados...");
}

class Cliente {
    constructor(id, pessoa, user) {
        this.id = id;
        this.pessoa = pessoa;
        this.user = user;
    }
}

let todos_enderecos = [new Endereco("Brasil", "MG", "Caratinga", "Esplanada", "35-300-333")];
console.log(todos_enderecos[0].bairro);

let cep = prompt("Digite seu cep por gentileza:");

let clientes = [new Cliente(cont_id, new Pessoa("Lucca", "020.651.056-07", cep, 55, todos_enderecos), "lucca_gbr")];

console.log(clientes[0].id);
console.log(clientes[0].pessoa.nome);
console.log(clientes[0].pessoa.cpf);
console.log(clientes[0].pessoa.endereco.bairro);
console.log(clientes[0].user);