const prompt = require("prompt-sync")()
let numeros = []

for(let i = 0; i <= 5; i++){
  numeros.push(prompt("Informe um número: "))
  let numerosArray = numeros[i]

  console.log(numerosArray)
}