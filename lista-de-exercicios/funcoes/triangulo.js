function triangulo(lado1 = 1, lado2 = 1, lado3 = 1) {
    if(lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isosceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(2, 2, 2))