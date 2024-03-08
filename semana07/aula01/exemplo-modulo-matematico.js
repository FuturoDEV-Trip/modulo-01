function moduloMatematico(){
  let total = 0;

  function somaUm(){
    total = total + 1
    console.log(total)
  }

  function subtraiUm(){
    total = total - 1
    console.log(total)
  }

  return {
    somaUm: somaUm,
    subtraiUm: subtraiUm
  }
}

const modulo = moduloMatematico()
modulo.somaUm()
modulo.somaUm()
modulo.somaUm()
modulo.subtraiUm()