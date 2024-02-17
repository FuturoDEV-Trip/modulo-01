function adicao(num1, num2, funcaoAnonima){
    let soma = num1 + num2;
    funcaoAnonima(soma);
}

adicao(2,2, (sum)=>{ 
    console.log("O resultado final é: "+ sum);
})


//Exemplo real de função de callback
// Imagine que você tem uma função que cria um usuário e outra que executa uma compra.
// Você quer que a compra só seja executada após a criação do usuário.
// Porem com o atraso normal de uma requisição, a compra pode ser executada antes da 
// criação do usuário por conta do javascript ser assincrono.
// function criarUsuario(callback){
//     .then(()=>{
//         callback();
//     })
// }
// const executaCompra = ()=>{}
// criarUsuario(executaCompra());



