class Conta_bancaria {
    constructor(numero_conta, saldo) {
        this.numero_conta = numero_conta;
        this.saldo = saldo;
        this.conta_poupanca = new Conta_poupanca();
        this.especial = {
            saldo_disponivel: 200,
            saldo_utilizado: 0,
            juros_especial: 2
        }
    }

    get getNumero_conta() {
        return this.numero_conta;
    }

    set setNumero_conta(numero_conta) {
        this.numero_conta = numero_conta;
    }

    get getSaldo() {
        return this.saldo;
    }

    set setSaldo(saldo) {
        this.saldo = saldo;
    }
}

// Funções da classe Conta bancária
Conta_bancaria.prototype.acoes_na_conta = function() {
    console.log("- Bem-vindo ao sistema do banco -");
    let sair = false;
    let cont = -1;
    let retorno;
    do {       
        retorno = false;
        cont = Number(prompt("Selecione uma ação:\n\n1 - Consultar saldo Conta Corrente\n2 - Depositar na Conta Corrente\n3 - Sacar da Conta Corrente\n4 - Aplicar na Conta Poupança\n5 - Resgatar da Conta Poupança\n0 - Sair")); 
        
        if(isNaN(cont)) {
            console.log("Por gentileza, digite uma das opções (NÚMEROS)");
            continue;
        }

        switch(cont) {
            case 1:
                console.log("Consulta de saldo em conta corrente.");
                this.consulta_conta_corrente();
                break;

            case 2:
                let valor_deposito = Number(prompt("Digite o valor do deposito:"));
                retorno = this.depositar(valor_deposito);

                if(retorno == false) {
                    console.log("Não foi possível realizar o depósito, voltando ao menu inicial...");
                } else if(retorno == true) {
                    console.log(`O valor de R$ ${valor_deposito},00, foi depositado com sucesso!`);
                }
                break;

            case 3:
                let valor_saque = Number(prompt("Digite o valor do saque:"));
                retorno = this.saque(valor_saque);

                if(retorno == false) {
                    console.log("Não foi possível realizar o saque, voltando ao menu inicial...");
                } else if(retorno == true) {
                    console.log(`O valor de R$ ${valor_saque},00, foi realizado com sucesso!\nPegue suas notas abaixo...`);
                }
                break;

            case 0:
                console.log("Saindo...");
                sair = true;
                break;
        }

    } while(sair != true)
}

Conta_bancaria.prototype.consulta_conta_corrente = function() {

    //Utilizou saldo especial
    if(this.saldo < 0) {
        console.log("**** Você está utilizando o saldo especial ***");
        console.log(`\n\nSaldo especial disponível: R$ ${this.especial.saldo_disponivel},00`);
        console.log(`Saldo utilizado: R$ ${this.especial.saldo_utilizado},00`);
        console.log(`Devedor (juros incluso): R$ ${(this.juros * this.especial.juros_especial) * this.especial.saldo_utilizado}`);
    } else{
        console.log(`Número da conta: ${this.getNumero_conta}`);
        console.log(`Saldo disponível: ${this.getSaldo}`);
    }
}

Conta_bancaria.prototype.depositar = function(valor_deposito) {
    
    //Caso o usuário digite letras
    if(isNaN(valor_deposito)) {
        console.log("Você deve digitar apenas letras...");
        return false;
    } else if(valor_deposito <= 1) {
        console.log(`O valor de deposito não pode ser inferior a um real. Peço que selecione o valor correto...`);
        return false;
    }

    this.saldo += valor_deposito;
    return true;
}

Conta_bancaria.prototype.saque = function(valor_do_saque) {
    //Caso o usuário digite letras
    if(isNaN(valor_do_saque)) {
        console.log("Você deve digitar apenas letras...");
        return false;
    } else if(valor_do_saque <= 1) {
        console.log(`O valor de deposito não pode ser inferior a um real. Peço que selecione o valor correto...`);
        return false;
    } else if((this.saldo <= 0) || ((this.saldo - valor_do_saque) < 0)) {
        if(confirm("O saldo na conta não é suficiente, deseja utilizar o saldo especial?")) {
            console.log("Você optou por utilizar o cheque especial.");
            this.saque_saldo_especial(valor_do_saque);
        } else {
            console.log("Por conta de não ter o saldo suficiente e por não querer utilizar o saldo especial, voltaremos ao menu inicial");
            return false;
        }
    }

    this.saldo -= valor_do_saque;
    return true;
}

//Utilizando o saldo especial
Conta_bancaria.prototype.saque_saldo_especial = function(valor_retirado_especial) {
    console.log("*** ATENÇÃO, VOCÊ ESTÁ UTILIZANDO O SALDO ESPECIAL ***");

    if((this.especial.saldo_disponivel <= 0 || (this.especial.saldo_disponivel - valor_retirado_especial) < 0)) {
        if(confirm("*** ATENÇÃO, VOCÊ ESTÁ UTILIZANDO ACIMA DO LIMITE DISPONÍVEL, TEM CERTEZA?")) {
            this.especial.saldo_utilizado += valor_retirado_especial;
            this.especial.saldo_disponivel -= valor_retirado_especial;
            return true;
        } else {
            console.log("Retornando ao menu inicial...");
            return false;
        }
    }

    this.especial.saldo_disponivel -= valor_retirado_especial;
    this.especial.saldo_utilizado += valor_retirado_especial;
    return true;
}

class Conta_poupanca {
    constructor() {
        this.num_conta_poupanca = "";
        this.saldo_poupanca = 0;
        this.juros = 0;
    }
}

let conta = new Conta_bancaria("200300022", 500);

conta.acoes_na_conta();