const funcs = []

for(let i = 0; i < 10; i++) { //a variável let reconhece o i anteriores quando executado
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()