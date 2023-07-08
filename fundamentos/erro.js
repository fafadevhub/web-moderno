function imprimirNomeGritado(obj) {

    try {

        console.log(obj.name.toUpperCase() + "!!!")
        
    } catch(error) {
        console.log(error)
    } finally {
        console.log("Fim")
    }

}

imprimirNomeGritado({ name: "Fabricio" })


