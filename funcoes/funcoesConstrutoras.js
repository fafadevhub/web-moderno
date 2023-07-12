function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //atributo publico
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log(typeof uno)
console.log(typeof Carro)