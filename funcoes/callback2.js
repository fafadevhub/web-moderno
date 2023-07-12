const notas = [7.2, 8.9, 5.6, 4.6]

let notasBaixas = []

//Sem Callback
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)