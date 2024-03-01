// INÍCIO EXERCÍCIO 03
const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i + 1} número: `));
  numeros.push(numero);
}

for(let i = 0; i < 5; i++){
  console.log(`O ${i + 1} número é ${numeros[i]}`)
}
// FIM EXERCÍCIO 03

// INÍCIO EXERCÍCIO 04
const soma = numeros.reduce((acumulador, numeroAtual) => {
  return acumulador + numeroAtual
}, 0)
// const soma = numeros
// .reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

console.log("A soma dos números é ", soma)
// FIM EXERCÍCIO 04


// INÍCIO EXERCÍCIO 05
const numerosOrdenados = [...numeros]
//                                            10     -  10 = 0
numerosOrdenados.sort((numero1 , numero2) => numero1 - numero2)
// numerosOrdenados.sort()
console.log(`A lista de números ordenados é ${numerosOrdenados.join(" ")}`)
// FIM EXERCÍCIO 05

// INÍCIO EXERCÍCIO 06
const soPares = numeros.filter(numeroAtual => {
  if(numeroAtual % 2 == 0){
    return true
  }
})

console.log("O novo array com números pares é ", soPares)
// FIM EXERCÍCIO 06

// INÍCIO EXERCÍCIO 07
// const quadrados = numeros.map(numeroatual => numeroatual * numeroatual)
const quadrados = numeros.map(numeroatual => numeroatual ** 2)

console.log("O array dos quadrados do números é ", quadrados)
// FIM EXERCÍCIO 07