var num1 = parseFloat(prompt("Número 1:"))
var num2 = parseFloat(prompt("Número 2: "))

console.log(min(num1 ,num2))
console.log(max(num1 ,num2))

function min(a, b){
    if (a < b){
        return a;
    }else{
        return b
    }
}

function max(a, b){
    if(a > b){
        return a
    }else{
        return b
    }
}