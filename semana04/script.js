//Função
//Exemplo 01
function imprimeMensagem(){
    //corpo da função
    console.log("Olá, mundo!");
}
imprimeMensagem(); //Para chamar uma função basta colocar o nome da função e os parenteses
//No caso acima a função imprimeMensagem foi chamada e o console irá imprimir "Olá, mundo!"

//Exemplo 02
//Para passar uma propriedade atraves dos parametros basta colocar o nome 
//da propriedade entre parenteses e separar por virgula caso tenha mais de uma
var nome = "Maria"; 
function imprimeMensagemDeLogado(nomedoUsuario){
    //Na linha abaixo estamos concatenando uma string com o parametro que foi passado
    return "O(a) usuario(a) " + nomedoUsuario + " está logado"; 
}
let msg = imprimeMensagemDeLogado(nome); //Para chamar uma função basta colocar o nome da função e passar os parametros, caso tenha
console.log(msg); //O(a) usuario(a) Maria está logado

//Exemplo 03
function somar(num1, num2){
    console.log(num1+num2);
}

somar(2,3); //5
somar(5,7); //12

//Exemplo 04 - Função com parametros default
//Caso o parametro não seja passado, o valor padrão para o parametro num será 2
function multiplicar(num1, num2 = 2){
    return num1*num2;
}

console.log(multiplicar(10, 5)); //50
console.log(multiplicar(10)); //20

//===========================================================================

//Exercicio slide 01 - página 16
//Resposta
function imprimeConvite(nome){
    document.write(`Convido ${nome} para o casamento de fulano e fulana`);
}
let nome = prompt("Digite seu nome");
imprimeConvite(nome);

//===========================================================================

// Função anômima - função sem nome
//Declaração de função anômima
// Exemplo 01:
const idadeMaisDez = function(idade) {return idade +10};
let retorno = idadeMaisDez(25);
console.log(retorno); //35

// Exemplo 02:
//No caso da função anômima, a função é atribuida a uma variável
const somaDoisMaisDois = function(){ //observe que a função anômima não tem nome apenas a palavra function
    return 2+2;
}
let resultado = somaDoisMaisDois();
console.log(resultado); //4
//OBS: A função anômima é muito utilizada quando queremos passar uma função como parametro para outra função
//porem com a atualização do ECMAScript 6 a função de seta (arrow function) é mais utilizada para esse tipo de situação
//Exemplo:
// funções como .forEach, .map, .filter, .reduce ou addEventListener onde sua declaração ficaria mais ou menos assim:
// array.forEach(function(item){}); //versão mais antiga
// ou
// array.forEach((item)=>{}); //versão mais atual

//===========================================================================

// Arrow function - função da seta ( ()=>{} )
//Exemplo 01:
//A arrow function é uma forma mais enxuta de escrever uma função anônima
//Declaração da arrow function
const exemplo = ()=>{
    //corpo da função
}
//Para chamar a função basta colocar o nome da função e os parenteses com os parametros caso tenha
exemplo();


//Em resumo
function nomedafuncao(){} //Declaração de função nomeada
nomedafuncao(); //Chamada de função nomeada

const funcaoAnonima = function(){} //Declaração de função anônima
funcaoAnonima(); //Chamada de função anônima

const arrowFunction = ()=>{} //Declaração de arrow function
arrowFunction(); //Chamada de arrow function

//Exemplo 02: com parametros
function nomedafuncao2(param1, param2){} //Declaração de função nomeada
nomedafuncao("parametro 1","parametro 2"); //Chamada de função nomeada

const funcaoAnonima2 = function(param1, param2){}
funcaoAnonima("parametro 1","parametro 2");

const arrowFunction2 = (param1, param2)=>{}
arrowFunction("parametro 1","parametro 2");

//===========================================================================

// Estrutura de repetição - Laço for
// Para o laço for, temos 3 partes:
// 1 - Inicialização da variável
// 2 - Condição de parada
// 3 - Incremento ou decremento
//Exemplo 01:
for (i = 0; i < 5; i++) {
    console.log("contador:" + i);
}

//Exemplo 02:
let array = ["A","B","C"]; //array com 3 elementos, ou seja, seu tamanho é 3
for (i = 0; i < array.length; i++) { //array.length retorna o tamanho do array
    console.log("contador:" + i);
}

//===========================================================================

//Estrutura de repetição - Laço while
// No laço while, a condição de parada é definida no inicio do laço antes do bloco de código
//Exemplo 01:
let desejaSair = prompt("Você deseja entrar no sistema? Digite S ou N");
let totalUvas = 0;
while (desejaSair == "S") { //enquanto a opção for S, o laço irá continuar a repetir
    let quantUva = prompt("quantas uvas você deseja comprar?");
    totalUvas += parseInt(quantUva);
    desejaSair = prompt("Você deseja continuar a compra de uvas? Digite S ou N");
}
console.log("Total de uvas compradas: " + totalUvas);

//Exemplo 02:
var opcao = "2";
while (opcao == "2") {
  // Todas as vezes que o laço while é executado, o opcao é perguntado ao usuário
  opcao = prompt("você aceita a opção 1 ou 2?");
}

//===========================================================================

//Estrutura de repetição - Laço Do While
// No laço do while, a condição de parada é definida no final do laço, após o bloco de código
//Exemplo 01:
let totalPeras = 0;
//Diferente do laço while, o laço Do While executa o bloco de código pelo menos uma vez
//Por isso não é necessário perguntar a opção antes de entrar no laço
let desejaSair2; 
do{
    let quantPera = prompt("Quantas pêras você deseja comprar?");
    totalPeras += parseInt(quantPera);
    desejaSair2 = prompt("Você deseja continuar a compra de pêras? Digite S ou N");
}while (desejaSair2 == "S") //enquanto a opção for S, o laço irá continuar a repetir

console.log("Total de pêras compradas: " + quantPera);
