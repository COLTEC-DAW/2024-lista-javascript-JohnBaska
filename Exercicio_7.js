frase = prompt("Escreva uma frase")
c = prompt("Escreva o caracter que deseja procura nessa frase")

function countChars(frase, c){
    var count = 0

    for (let i = 0; i < frase.length; i++){

        if (frase[i] == c){
            count++
        }
    }

    return count
}

console.log(countChars(frase, c))