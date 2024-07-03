number = parseInt(prompt("Numero (didendo)"))
mod = parseInt(prompt("Número (divisor)")) 

console.log(resto(number, mod))

function resto(number, mod){
    var resto = number%mod;
    
    if (resto == 0){
        return true
    }else{
        return false
    }
}