function formatarValorDecimal(valorDecimal) {
  let valorEmReais = `R$ ${valorDecimal
    .toFixed(2) //função formata o número para até duas casas decimais
    .toString() //função transforma número em string
    .replace('.', ',')}` //função troca o primeiro argumento pelo segundo
  console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)
