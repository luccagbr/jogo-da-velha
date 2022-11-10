let obj = {
    rodas: 8,
    passageiros: 40,
    portas: 2
};

delete obj.rodas;

obj.janelas = 20;

console.log(`Quantidade de janelas: ${obj.janelas}`);
console.log(`Propriedade excluída: ${obj.rodas}`);
console.log(obj);