//Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(4, 5, 6))

//estratégia 2, 3, 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(4, 5, 6))

//valor padrão do Ecma Script 2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(4,5,6))
