var palavra = prompt("Número de linhas")
var tamanho = palavra.length
var parl = true

for (let i = 0; i < tamanho/2; i++){
    if (palavra[i] != palavra[tamanho - (i+1)]){
        parl = false;
    }

}



if (parl == true){
    console.log("É palindromo")
}else{
    console.log("Não é palindromo")
}
