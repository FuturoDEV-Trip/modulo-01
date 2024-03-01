const numeros = [10, 2, 5, 3, 15]

let valorInicial = 0
// realize a soma de todos os números da lista
const resultado = numeros.reduce((soma, numeroAtual) => {
  return soma + numeroAtual
}, 0)

console.log(resultado)