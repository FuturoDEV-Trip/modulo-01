// let a = 2;
// function soma(){
//   let b = 5;
//   return a + b;
// }

// console.log(soma())

function soma(a){
  // a = 5
  return function (b){
    // b = 2
    return a + b
  }
}

const add5 = soma(5)

console.log(add5(2))