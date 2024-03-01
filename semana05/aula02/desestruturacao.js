const aluno = {
  nome: "Bruno",
  turma: "Trip",
  email: "email@email.com"
}
aluno.nome = "Hendy"

let {turma} = aluno
// turma = "Nature"
// console.log(turma)
// console.log(aluno)

const nomes = ["Bruno", "Julia", "Rodrigo", "Rob"]

let [primeiro, segundo, terceiro, quarto] = nomes
nomes[3]
