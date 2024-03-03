//Exercício 06
// let cep = prompt("Digite seu CEP:");

// fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
//   .then((retornoFetch) => {
//     return retornoFetch.json();
//   })
//   .then((retornoApi) => {
//     // “logradouro, complemento - bairro - localidade/uf”

//     alert(`${retornoApi.logradouro}, ${retornoApi.complemento} -
//     ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);
//   });

//Exercício 07
// let cep = prompt("Digite seu CEP:");

// fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
//   .then((retornoFetch) => {
//     return retornoFetch.json();
//   })
//   .then((retornoApi) => {
//     // “logradouro, complemento - bairro - localidade/uf”

//     alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - 
//   ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

//     let resposta = prompt("Os dados estão corretos?");

//     if (resposta.toLowerCase() == "sim") {
//       localStorage.setItem("endereco", JSON.stringify(retornoApi));
//     }
//   });

//Exercício 08 (Todos os exercícios juntos)
let endereco = localStorage.getItem("endereco");

if (endereco == null) {
  pegarEndereco();
} else {
  let atualiza = prompt(
    "Endereço já informado na base de dados, deseja atualizar? S/N"
  );
  if (atualiza == "S") {
    pegarEndereco();
  } else {
    alert("Execução finalizada.");
  }
}

function pegarEndereco() {
  let cep = prompt("Digite seu CEP:");

  fetch(`https://viacep.com.br/ws/${cep}/json`, { method: "GET" })
    .then((retornoFetch) => {
      return retornoFetch.json();
    })
    .then((retornoApi) => {
      // “logradouro, complemento - bairro - localidade/uf”

      alert(`${retornoApi.logradouro}, ${retornoApi.complemento} - 
    ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`);

      let resposta = prompt("Os dados estão corretos?");

      if (resposta.toLowerCase() == "sim") {
        localStorage.setItem("endereco", JSON.stringify(retornoApi));
      }
    });
}
