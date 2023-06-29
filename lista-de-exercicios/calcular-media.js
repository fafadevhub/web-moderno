function calcular_media(lista) {
    var soma = 0
    let i = 0
    while(i < lista.length) {
        soma += lista[i]
        i++
    }

    var media = soma / lista.length

    return media
}

console.log(calcular_media([0, 10]))