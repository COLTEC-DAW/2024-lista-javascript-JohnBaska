// Verificando Palíndromos

var palavra = prompt("Número de linhas")

function verificaPalindromo (palavra){
    var tamanho = palavra.length
    var pl = true

    for (let i = 0; i < tamanho/2; i++){
        if (palavra[i] != palavra[tamanho - (i+1)]){
            parl = false;
        }

    }

    return pl
}

if (verificaPalindromo(palavra) == true){
    console.log("É palindromo")
}else{
    console.log("Não é palindromo")
}