function primeiro_e_ultimo(lista) {
    var tamanhoLista = lista.length
    return [lista[0], lista[tamanhoLista - 1]]
}

console.log(primeiro_e_ultimo([2,3,4]))