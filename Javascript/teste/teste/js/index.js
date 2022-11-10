function somaNumber(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);

        if((a == undefined) || (b == undefined)) {
            reject("Não foi informado nenhum número...");
        }
    })
}

async function calcular(a, b, c) {
    let x = somaNumber(a, b);
    let y = c;

    return await x + y;
}

calcular(15, 30, 20).then(retorno => console.log(`Tudo ocorreu bem e, o retorno foi de: ${retorno}`))
 .catch(erro => console.log("Não foi possível continuar, " + erro));