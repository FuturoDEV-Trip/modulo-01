class Carro {
  // atributos ou propriedades
  cor;
  modelo; // undefined
  marca;
  preco;

  // receber os valores iniciais
  constructor(
    valorModelo, 
    valorCor, 
    valorMarca, 
    valorPreco
  ){
    this.modelo = valorModelo
    this.cor = valorCor
    this.marca = valorMarca
    this.preco = valorPreco
  }

  // método
  // acelerar(){
  //   console.log(`O carro está acelerando!`)
  // }

  // polimorfismo
  acelerar(velocidade){
    console.log(`O carro está acelerando a ${velocidade} km/h!`)
  }

  // acelerar(velocidade, limite){
  //   console.log(`O carro está acelerando a ${velocidade} km/h! ${limite}`)
  // }

  alterarCor(novaCor){
    this.cor = novaCor
  }

  alterarModelo(novoModelo){
    this.modelo = novoModelo
  }

  descrever(){
    console.log(this)
  }
}

// instância
let carroPrata = new Carro(
  "Corolla", 
  "Prata", 
  "Toyota", 
  120000
)


// carroPrata.alterarCor("Branca"),
carroPrata.descrever()
carroPrata.acelerar(80)


let carroAzul = new Carro()
carroAzul.cor = "Azul"
carroAzul.modelo = "Renegade"
carroAzul.marca = "Jeep"
carroAzul.preco = 180000
console.log(carroAzul)

// let usuario = {
//   nome: "Bruno",
//   email: "email@email.com"
// }

// usuario.senha = 1234
// console.log(usuario)