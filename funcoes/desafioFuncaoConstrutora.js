function criarPessoa(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

let p1 = new criarPessoa('Fabricio')
p1.falar()
