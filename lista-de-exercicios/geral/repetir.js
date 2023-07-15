var lista = []

function repetir(item, vez) {
    let i = 0
    while(i < vez) {
        lista.push(item)
        i++
    }

    return lista
}

console.log(repetir("código", 4))