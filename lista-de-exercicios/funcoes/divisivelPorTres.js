function consultarDivisao(inteiro) {
    const algarismos = (""+inteiro).split("")
    let somaDosAlgarismos = 0
    for(let index = 0; index < algarismos.length; index++) {
        somaDosAlgarismos += Number(algarismos[index])
    }

    if(somaDosAlgarismos % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(consultarDivisao(9))