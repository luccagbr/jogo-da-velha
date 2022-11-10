class Loja {
    constructor(item) {
        this.item = item;
        this.quantidade_total = 0;
        this.valor_total = 0;
    }

    //Getters e Setters

    //Item
    get getNome_item() {
        return this.item.nome_item;
    }

    set setNome_item(nome_item) {
        this.item.nome_item = nome_item;
    }

    get getQuantidade_item() {
        return this.item.quantidade;
    }

    set setQuantidade_item(quantidade_item) {
        this.item.quantidade = quantidade_item;
    }

    get getValor_item() {
        return this.item.valor_item;
    }

    set setValor_item(valor_item) {
        this.item.valor_item = valor_item;
    }

    /*---------------------------------------------------*/
}

Loja.prototype.cadastra_item = function() {
    let item = "";
    let cont = false;
    let op;

    do{
        op = -1;

        console.log("Bem vindo ao Sistema de cadastro de itens...");

        op = Number(prompt("O que deseja fazer?\n\n1 - Cadastrar item\n2 - Remover item\n3 - Listar itens\n0 - Sair"));

        switch(op) {
            case 1:
                item = prompt("Digite o nome do item:");

                if(this.verifica_item(item)) {
                    console.log("Este item já foi cadastrado no sistema...");
                    continue;
                }
                this.setNome_item = item;
                this.setQuantidade_item = Number(prompt("Digite a quantidade de itens:"));
                this.setValor_item = Number(prompt("Digite o valor por item:"));
                this.calcula_quantidade_total(this.item.quantidade_item);
                break;

            case 2:
                if(this.remove_item(prompt("Digite o nome do item que deseja remover:")) == true)
                    console.log("Item removido com sucesso...");

                break;    
        }
    } while(cont != true);
}

// Verifica dentro do array de itens se o item já existe

Loja.prototype.verifica_item = function(item) {
    for(let cont in this.item) {
        if(this.item[cont].item == item) {
            console.log("O item que você quer adicionar já foi cadastrado...");
            return true;
        }
    }
    console.log("O item não existe na base de dados...");
}

Loja.prototype.remove_item = function(item) {
    for(let remove_item in this.item) {
        if(this.item[remove_item].item == item) {
            this.item.splice(remove_item, 1);
            return true;
        }
    }
    console.log("Não foi possível realizar a remoção do item, pois não foi localizado...");
}

//Total de itens

Loja.prototype.calcula_quantidade_total = function(quantidade) {
    this.quantidade_total += quantidade;
}

Loja.prototype.calcula_valor_total = function(valor) {
    this.valor_total += valor;
}

Loja.prototype.lista_itens = function() {
    console.log("Lista de itens:");

    for(let item in this.item) {
        console.log(this.it)
    }
}
let e_commerce = new Loja([{
    nome_item: "",
    quantidade: 0,
    valor_item: 0
}]);