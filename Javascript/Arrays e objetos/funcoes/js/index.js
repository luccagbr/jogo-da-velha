let json_obj = {
    "nome": "Lucca",
    "cpf": "020.651.056-07",
    "hobbies": ["Correr", "Jogar bola", "Ver a natureza"]
}

let json_string = JSON.stringify(json_obj);

console.log(json_string);

let json_formater = JSON.parse(json_string);

console.log(json_formater);

console.log(json_formater.hobbies[0]);