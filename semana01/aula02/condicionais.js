// let valor = 14

// if(valor == 10){
//   // bloco verdade
//   console.log("caiu no if 1")
// } else if(valor == 12) {
//   console.log("caiu no if 2")
// } else {
//   // bloco falso
//   console.log("caiu no falso")
// }

let turno = 'dia'

// operador de escolha
switch(turno){
  case 'dia':
  case 'tarde':
      console.log("Bom dia")
      break
  case 'noite':
    console.log("Boa noite")
    break
  default:
    console.log("Não encontrei o seu turno")
}

// switch(turno){
//   case 'dia':
//     console.log("Bom dia")
//     break
//   case 'tarde':
//     console.log("Boa tarde")
//     break
//   case 'noite':
//     console.log("Boa noite")
//     break
//   default:
//     console.log("Não encontrei o seu turno")
// }

// operador ternário
let resultado = 5 % 2 == 0 ? "PAR" : "IMPAR"
console.log(resultado)