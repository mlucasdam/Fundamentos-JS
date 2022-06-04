let x = " 0";
console.log (x);
x = "oi!";

function imprimeTexto (texto) {
    console.log(texto)
}

imprimeTexto ("oi")

console.log(soma(2, 2));

imprimeTexto (soma());

function nomeIdade (nome, idade){
    return`meu nome é ${nome} e minha idade é ${idade}`
}

function soma(num1, num2){
    return num1 + num2;   
}

function multiplica (num1, num2){
    return num1 * num2
}

console.log(soma(5, 10), soma(6,78))


function cumprimentar (){
    return "oi gente!"
}

function cumprimentarPessoa (nomePessoa){
    console.log (`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentarPessoa('Lucas')


function apresentar (nome){
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`


const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return " Somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}


