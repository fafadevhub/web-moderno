function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log('Valor acima do permitido '.concat(area).concat('mts2'))
  } else {
    return area
  }
}

console.log(area(20, 5))
