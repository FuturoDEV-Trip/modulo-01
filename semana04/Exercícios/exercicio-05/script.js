let totalRuins = 0;
let contador = 1;
while (contador <= 4){
    let resposta = prompt("Qual a asua avaliação para a a serie stranger things? (bom), (ruim) ou (excelente)");
    if(resposta == "ruim" ) {
        totalRuins++;
    }

    contador++;
}

console.log(`Total de usuários que avaliou a série como ruim: ${totalRuins}`);