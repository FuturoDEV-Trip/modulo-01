const aluno = {
  nome: "Bruno",
  turma: "Trip",
  email: "email@email.com"
}
// const aluno2 = {
//   nome: "Ricardo",
//   turma: "Trip",
//   email: "email@email.com"
// }

const alunos2 = {...aluno}
console.log(alunos2)

// let aluno3 = {...aluno, nome: "Ricardo"}
// const aluno2 = {...aluno}
// aluno2.nome = "Ricardo"

// console.log(aluno)
// console.log(aluno2) 

const frutas = ["Laranja", "Maça", "Acerola", "Abacaxi"]
const frutas2 = ["Morango", "Pessego", "Pera", "Maça"]

const frutas3 = [...frutas, ...frutas2]
frutas3.push("Manga")

console.log(frutas)
console.log(frutas3.join(" "))