let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let cidade = prompt("Onde você mora?");

localStorage.setItem("name", nome);
localStorage.setItem("age", idade);
localStorage.setItem("city", cidade);

