const idadeMinima = 18;
const idadeCliente = 19;

if (idadeCliente >= idadeMinima) {
    console.log ("cerveja")
} else { 
    console.log ("suco")
}

console.log (idadeCliente >= idadeMinima ? "cerveja" : "suco")


const nome = "Lucas";
const idade = 2022-1999;
const cidadeNascimento = "Campinas";

const apresentação = "Meu nome é " + nome + ", minha idade é " + idade + " anos" + " e nasci na cidade de " + cidadeNascimento
const apresentação_2 = `Meu nome é ${nome}, minha idade é ${idade} anos e nasci na cidade de ${cidadeNascimento}`

console.log (apresentação)
console.log (apresentação_2)

const nome_2 = "Leo"
const idade_2 = 23;
const bebidaMaior = "Cerveja";
const bebidaMenor = "Suco";

const pedido = `${nome_2} diz: "pofavor quero beber ${idade_2>= 18? bebidaMaior : bebidaMenor}`
console.log(pedido)

