//par nome/valor
const saudacao = "Olááaa" //contexto lexico 1

function exec() {
    const saudacao = "Eiiii" //contexto lexico 2
    return saudacao
}

//ObJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
    nome: "Pedro",
    idade: 15,
    peso: 70,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 23
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)