var min = parseInt(prompt("Escreva um valor inicial"))
var max = parseInt(prompt("Escreva um valor final"))

function range (min, max){
    var array = []

    for (let i = min; i < (max + 1); i++){
        array.push(i)
    }

    return array
}

console.log(range(min, max))