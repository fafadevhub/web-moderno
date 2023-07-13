function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 2000,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = { preco: 53600, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, "$"))//primeiro parametro é o contexto, o restante são os argumentos para a função

console.log(getPreco.apply(carro, [0.17, "$"])) // os parametros restantes tem que estar dentro de um array