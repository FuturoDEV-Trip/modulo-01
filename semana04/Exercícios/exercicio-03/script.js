const exercicio = (array)=>{
    let soma = 0;
    for(let numero of array){
        soma = soma + numero;
    }
    let media = soma/array.length;
    console.log(media);
}

let arrayNumeros = [10,10,10,10]; 

exercicio(arrayNumeros);