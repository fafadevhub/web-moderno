function seBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

seBoaNoticia(8)
seBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade..." + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
