let stringPontuacoes = '30, 40, 5, 25, 4, 50, 7, 12, 6'

function avaliarPontuacoes(stringPontuacoes) {
  let pontuacoes = stringPontuacoes.split(', ')
  let qtdQuebraDeRecords = 0
  let piorJogo = 1
  let maiorPontuacao = pontuacoes[0]
  let menorPontuacao = pontuacoes[0]

  for (let i = 1; i < pontuacoes.length; i++) {
    if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
      maiorPontuacao = pontuacoes[i]
      qtdQuebraDeRecords++
    } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
      menorPontuacao = pontuacoes[i]
      piorJogo = i + 1
    }
  }
  return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliarPontuacoes(stringPontuacoes))
