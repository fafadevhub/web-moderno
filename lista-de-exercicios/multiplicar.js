function multiplicar(num1, num2) {
    for(let i = 0; i == num2; i++) {
        num1 += num1
    }

    return num1
}

console.log(multiplicar(5*5))