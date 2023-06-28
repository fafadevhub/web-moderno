const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function mes(numero) {
    if(numero >= 1 && numero <= 12) {
        var resposta = meses[numero - 1]
        return resposta
    } else {
        return "Por favor digite um número de 1 a 12"
    }
        
}

console.log(mes(8))