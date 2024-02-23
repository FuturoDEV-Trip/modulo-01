// const numeros = [10, 2, 5, 3, 15]

// const copia = numeros.map((numeroAtual) => {
//   return numeroAtual * 2
// })

// const copia = numeros.map((numeroAtual) => numeroAtual * 2)

// console.log(copia)
// numeros.sort((a, b) => a - b)
// console.log(numeros)
// const copia = numeros.filter(numeroAtual => {
//   if(numeroAtual % 2 == 0){
//     return true
//   }
// })

// console.log(copia)

const nomes = ["Bruno", "Priscilla", "Lucas", "Thiago", "Julia", "Rob"]
// nomes.sort()
// console.log(nomes)
const soNomesFiltrados = nomes.filter(nomeAtual => {
  if(nomeAtual.charAt(0).includes("p")){
    return true
  }
})

console.log(soNomesFiltrados)