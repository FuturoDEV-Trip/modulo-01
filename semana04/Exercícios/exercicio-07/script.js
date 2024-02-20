let sumOfProducts = [0, 0, 0, 0, 0]; //array que armazena a quantidade de produtos comprados
//eu devo pre-setar um valor para cada posição do array, pois se não fizer isso, 
//a posição será undefined e não poderei somar a quantidade de produtos comprados
let option; //variável que armazena a opção escolhida pelo usuário

do {
  option = parseInt(
    prompt(
      "Qual produto você deseja comprar? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar Pedido"
    )
  ); //o parseInt é necessário para que o prompt retorne um número inteiro

  if (option < 1 || option > 6) { 
    //se a opção escolhida for menor que 1 ou maior que 6, o usuário será alertado
    alert("Opção inválida. Tente novamente.");
    break;
  }
  if (option === 6) { //se a opção escolhida for 6, o loop é quebrado
    //o loop é quebrado aqui para que o usuário não seja questionado 
    //sobre a quantidade de produtos comprados mesmo após ter escolhido fechar o pedido
    break;
  }

  let quantity = parseInt(
    prompt(`Quantas unidades do produto você deseja comprar?`)
  ); //o parseInt é necessário para que o prompt retorne um número inteiro

  sumOfProducts[option - 1] += quantity; //a quantidade de produtos comprados é somada à posição correspondente no array
  // exemplo, se eu comprei 2 unidades de Hortifruti, sua respectiva posição no array é 0,
  // porem o usuário escolheu a opção 1, então eu devo subtrair 1 da opção escolhida para que a quantidade seja somada 
  // na posição correta do array
} while (option != 6); //condição de parada do loop

if (sumOfProducts.length === 0) { //se o array estiver vazio, o usuário será alertado
  alert("Você não comprou nenhum produto.");
} else {
  let greaterQuantity = 0;
  let indexGreaterQuantity = 0;

  //o loop abaixo percorre o array sumOfProducts e verifica qual posição tem a maior quantidade de produtos comprados
  for (let i = 0; i < sumOfProducts.length; i++) {
    // se a quantidade de produtos na posição i for maior que a variável greaterQuantity,
    // a variável greaterQuantity recebe o valor da quantidade de produtos na posição i
    if (sumOfProducts[i] > greaterQuantity) { 
      greaterQuantity = sumOfProducts[i];
      indexGreaterQuantity = i; //variavel auxiliar que armazena a posição do array com a maior quantidade de produtos
    }
  }

  // abaixo, eu somo mais um ao indice da maior quantidade de produtos, 
  // pois o array começa em 0 mas o usuário seleciona de 1 a 5
  switch (indexGreaterQuantity + 1) {
    case 1:
      productName = "Hortifruti";
      break;
    case 2:
      productName = "Laticínios";
      break;
    case 3:
      productName = "Carnes";
      break;
    case 4:
      productName = "Peixes";
      break;
    case 5:
      productName = "Aves";
      break;
  }

  //o usuário é alertado sobre o produto com maior quantidade
  alert(`O produto com maior quantidade é ${productName}`);
}
