let nome = "Gabriel";

for(let i = 0; i <= 10; i++) {

    if(i == 3) {
        nome = "Lucca Gabriel";
    }

    if(i == 5) {
        console.log(`O nome é ${nome}, pode parar.`);
        break;
    }

    console.log(i);
}