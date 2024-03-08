class ContaBancaria {
  // convenção para atributo privado
  _saldo = 0;
  nomeTitular;
  agencia;
  numConta;
  banco;
  taxa;
  limiteDeCredito;
  senha;

  // o ideal é colocar somente o que é obrigatório
  constructor(nome, numAgencia, numeroConta, nomeBanco = 'Bradesco'){
    this.nomeTitular = nome
    this.agencia = numAgencia
    this.numConta = numeroConta
    this.banco = nomeBanco
    this.taxa = 2
    this.limiteDeCredito = 1000
  }

  exibirSaldo(){
    console.log(`O(a) titular ${this.nomeTitular} possui um saldo de R$ ${this._saldo}`)
  }

  depositar(valor){
    // this.saldo = this.saldo + valor
    this._saldo += valor
    console.log(`Valor de R$ ${valor} depositado com sucesso!`)
  }

  sacar(valor){
    if(valor > this._saldo){
      console.log("Saldo insuficiente!")
      return
    }
    // this.saldo = this.saldo - valor
    this._saldo -= valor
    console.log(`Valor de R$ ${valor} sacado com sucesso!`)
  }

}

let contaDoBruno = new ContaBancaria("Bruno", 1234, 123456, "Caixa economica")
// contaDoBruno.exibirSaldo()
// contaDoBruno.depositar(1000)
// contaDoBruno.sacar(500)
// contaDoBruno.exibirSaldo()
console.log(contaDoBruno)