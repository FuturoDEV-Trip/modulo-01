// const numeros = [5, 2, 3, 10]

// const numerosPares = numeros.filter(num => {
//   if(num % 2 == 0){
//     return true
//   }
// })

// console.log(numerosPares)

// let aluno = "Bruno"
// aluno.includes()

const nomes = 
["Julia", "Fernanda", "Rayssa", "Alex", "Maxon", "Wolny", "Hendy"]

const soNomesFiltrados = nomes.filter(nome => {
  // so quero nomes com a letra A
  if(nome.toUpperCase().includes("E")){
    return true
  }
})

console.log(soNomesFiltrados)

// const novoArray = nomes.map(nome => {
//   return nome.charAt(0)
// })

// console.log(novoArray)