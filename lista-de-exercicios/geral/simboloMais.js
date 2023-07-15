function simboloMais(vezes) {
    var mais = ""
    let i = 0
    while(i < vezes) {
        mais += "+"
        i++
    }

    return mais
}

console.log(simboloMais(5))