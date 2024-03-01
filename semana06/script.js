// Promises

// Na programação assíncrona, uma promessa é um objeto que representa o
// sucesso ou a falha
let promise = new Promise((resolve, reject) => {
  // Dentro de uma promise, você pode fazer qualquer coisa, como chamar uma API,
  // fazer uma requisição, etc.

  //Além disso, você pode fazer qualquer tipo de validação e, caso dê certo,
  // você chama o resolve, e caso dê errado, você chama o reject
  let deuCerto = true;
  if (deuCerto == true) {
    //O que é passado no parametro do resolve, é o que será retornado no then
    resolve("Deu sucesso");
  } else {
    //O que é passado no parametro do reject, é o que será retornado no catch
    reject("Ops! Deu falha");
  }
});

// Para esperar o retorno da promise, você pode usar o then e o catch
promise
  .then((mensagem) => {
    // a mensagem que é passada no resolve, é o que é retornado no parametro mensagem
    document.write("Mensagem sucesso: ", mensagem);
  })
  .catch((erro) => {
    document.write("Mensagem erro: " + erro);
  });


//Forma 1 
function example1(){
  return new Promise((resolve, reject)=>{
    
  })
}

example1()
.then(()=>{

})
.catch(()=>{

})

//Forma 2
function example2(){
  const retorno = new Promise((resolve, reject)=>{
    
  })
  retorno
  .then(()=>{})
  .catch(()=>{})
}


// ===============================================================

//Local Storage

function saveKeyFromLocalStorage() {
  //Para salvar um item no local storage, você pode usar o setItem
  //onde o primeiro parametro é o nome da chave e o segundo é o valor
  localStorage.setItem("name", "Rayane");
  localStorage.setItem("cidade", "Recife");
  localStorage.setItem("idade", 12);
  localStorage.setItem("active", true);

  // Para salvar um objeto, o processo é diferente, você deve usar o JSON.stringify
  // Leia mais sobre: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
}
saveKeyFromLocalStorage();

// Para pegar um item do local storage, você pode usar o getItem
// onde o parametro é o nome da chave
function getKeyFromLocalStorage() {
  let name = localStorage.getItem("name");
  //OBS: Todo retorno do local storage é uma string
  console.log(name);

  // Para pegar um objeto, o processo é diferente, você deve usar o JSON.parse
  // Leia mais sobre: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
}
getKeyFromLocalStorage();

// Para remover um item do local storage, você pode usar o removeItem
// onde o parametro é o nome da chave
function removeKeyFromLocalStorage(key) {
  localStorage.removeItem(key);
}
// removeKeyFromLocalStorage("name");
// removeKeyFromLocalStorage("cidade");
// removeKeyFromLocalStorage("active");

// ===============================================================

// Fetch API
// No caso da Fetch API, você pode fazer requisições para qualquer tipo de API
// como a do Pokemon, por exemplo (https://pokeapi.co/api/v2/pokemon/pikachu)

//Exemplo 01 - Fetch API com API externa
//Tanto faz você passar o segundo parametro diretamente ou não
// Forma 01:
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
//   method: 'GET'
// })

// Forma 02:
let optionalOptions = {
  method: "GET",
};
fetch("https://pokeapi.co/api/v2/pokemon/pikachu", optionalOptions)
  .then((responseObj) => {
    // Nesse ponto o que vem é um objeto javascript pre-formatado,
    // não é exatamente o que a API retorna, mas para pegar o json,
    // você deve chamar o método .json();
    // console.log(responseObj); // Response { type: "cors", url: "https://pokeapi.co/api/v2/pokemon/pikachu", redirected: false, status: 200, ok: true, … }
    return responseObj.json();
  })
  .then((responseApi) => {
    // Nesse ponto, o que vem é o que a API retorna
    // console.log(responseApi);
    // console.log(responseApi.sprites);
    // console.log(responseApi.sprites.front_default);
    let url = responseApi.sprites.front_default;
    document.write(`<img src='${url}'/>`);
  })
  .catch((error) => {
    // Caso dê erro em algum momento durante o then, você pode tratar no catch
    console.error(error);
  });

//Exemplo 02 - Fetch API com arquivo local
fetch("./teste.json")
  .then((responseObj) => {
    return responseObj.json();
  })
  .then((responseApi) => {
    console.log(responseApi); // {name: "Rayane", idadeMental: 12}
  })
  .catch((error) => {
    console.log(error);
  });

// ===============================================================

// Async / Await
// O async/await é uma forma de trabalhar com promises de forma mais simples
// e legível

// Exemplo 01 - Fetch API com async/await
// O exemplo abaixo é o mesmo exemplo do Fetch API, mas usando o async/await
async function pegarFotoPokemon() {
  let optionalOptions = {
    method: "GET",
  };

  let response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/magikarp",
    optionalOptions
  );
  response = await response.json();
  document.write(`<img src='${response.sprites.front_default}'/>`);
}
pegarFotoPokemon();

// Se você notar a função pegarFotoPokemon, ela é uma promise, ou seja, ela
// retorna uma promise, então você pode usar o then e o catch para trata-la
// console.log(pegarFotoPokemon());
pegarFotoPokemon()
  .then(() => {
    console.log("Deu certo");
  })
  .catch(() => {
    console.error("Deu erro");
  });
