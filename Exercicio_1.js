var Num_linhas = parseInt(prompt("Número de linhas"))
var str = ""

for (let i = 0; i < Num_linhas; i++){
    str += "##" + "#".repeat(i) + "\n"
}

console.log(str)