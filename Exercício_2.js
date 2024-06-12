var Num_linhas = parseInt(prompt("Número de linhas"))
var str = ""

for (let i = 0; i < Num_linhas; i++){
    if (i % 2 != 0){
        str += "# # # # \n"
    }else{
        str += " # # # #\n"
    }
}

console.log(str)