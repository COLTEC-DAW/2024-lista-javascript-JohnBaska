// Tabuleiro de Xadrez

var Num_linhas = parseInt(prompt("Número de linhas"))

function tabuleiroXadrez (Num_linhas){
    var str = ""

    for (let i = 0; i < Num_linhas; i++){
        if (i % 2 != 0){
            str += "# # # # \n"
        }else{
            str += " # # # #\n"
        }
    }
}

console.log(tabuleiroXadrez(Num_linhas))