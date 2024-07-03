// Desenhando um triângulo
var Num_linhas = parseInt(prompt("Número de linhas"))

function desenhaTriangulo (Num_linhas){
    var str = ""

    for (let i = 0; i < Num_linhas; i++){
        str += "##" + "#".repeat(i) + "\n"
    }

    return str
}

console.log(desenhaTriangulo(Num_linhas))