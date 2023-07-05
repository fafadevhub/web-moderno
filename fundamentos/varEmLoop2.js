const funcs = []

for(var i = 0; i < 10; i++) { // a variável var não reconhece o i anterior
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()