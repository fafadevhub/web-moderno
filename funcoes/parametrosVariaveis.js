function soma() { //arguments leva em dinamismo os parametros de entrada
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma(2,3,5))