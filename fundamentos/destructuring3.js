function rand({min = 0, max = 1000}) { //função que gera números aleatórios
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 0, max: 10}))