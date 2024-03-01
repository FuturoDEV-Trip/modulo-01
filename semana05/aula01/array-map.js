let numeros = [5, 2, 3, 10]
let soma = 0

numeros.map(n => {
  soma = soma + n
})

console.log(soma)
const numeros = [5, 2, 3, 10]

const dobro = numeros.map(n => {
  return n * 2
})
const dobro = numeros.map(n => n * 2)

console.log(dobro)
console.log(numeros)