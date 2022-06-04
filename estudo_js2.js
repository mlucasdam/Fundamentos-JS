const forma = 'triangulo'
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'Quadrado') {
   area = altura * comprimento;
}   else {
   area = (altura * comprimento) / 2;
}

console.log (area)


let minhavar;
let varNull = (null)

console.log (minhavar)
console.log (varNull)

let numero = 3;
let texto = "Biscoito"; 

console.log (typeof minhavar)
console.log (typeof varNull)
console.log (typeof numero)
console.log (typeof texto)

const numero2 = 456;
const numeroString = "456";


console.log (numero2 + Number(numeroString))


var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
    var respostaDeTudo = 3.14;
    let idade = 42;
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}

console.log(respostaDeTudo,idade,pi)