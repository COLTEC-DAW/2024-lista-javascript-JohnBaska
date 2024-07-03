var array = [1, 2, 3, 4, 5]

class list {
    lista(valor){
        this.value = valor
        this.rest = null
    }
}

function toList (array){
    var vetor = []

    // Cria os nós individuais
    for (let i = 0; i < array.length; i++){
        vetor.push(new list(array[i]))
    }

    
    // Conectar os nós para formar uma lista vinculada
    for (let i = 0; i < vetor.length; i++){
        vetor[i].value = array[i]

        if (i != vetor.length - 1){
            vetor[i].rest = vetor[i + 1]
        }else{
            vetor[i].rest = null
        }
    }

    return vetor[0]
}

var lista = toList (array)

// Percorrer a lista vinculada e imprimir os valores
let current = lista

while (current !== null) {
    console.log(current.value)
    current = current.rest
}
