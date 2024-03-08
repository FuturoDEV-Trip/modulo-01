class Pessoa {
  nome;
  dataNascimento;
  email;

  constructor(valorNome, valorDataNascimento, valorEmail) {
    this.nome = valorNome;
    this.dataNascimento = valorDataNascimento;
    this.email = valorEmail;
  }
}

class Funcionario extends Pessoa {
  cargaHoraria;

  constructor(valorNome, valorDataNascimento, valorEmail, valorCargaHoraria) {
    super(valorNome, valorDataNascimento, valorEmail);
    this.cargaHoraria = valorCargaHoraria;
  }
}

let funcBruno = new Funcionario("Bruno", "1999-01-25", "email@email.com", 80);
console.log(funcBruno);

// é uma relação do tipo 'é um'
class Professor extends Funcionario {
  turma;
  disciplina;

  constructor(
    valorNome,
    valorDataNascimento,
    valorEmail,
    valorCargaHoraria,
    turma,
    disciplina
  ) {
    super(valorNome, valorDataNascimento, valorEmail, valorCargaHoraria);

    this.turma = turma;
    this.disciplina = disciplina;
  }
}

let profBruno = new Professor(
  "Bruno",
  "1999-01-25",
  "email@email.com",
  80,
  "Trip",
  "FuturoDEV"
);

console.log(profBruno)

class Diretor extends Funcionario {}

let diretorCezar = new Diretor();
