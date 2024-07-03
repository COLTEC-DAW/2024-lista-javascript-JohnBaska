let obj1 = {}
let obj2 = {}

// let obj1 = { nome: "João", idade: 30 };
// let obj2 = { nome: "João", idade: 30 };

function deepEquals (obj1, obj2){
    var keys1 = Object.keys(obj1)
    var keys2 = Object.keys(obj2)

    console.log(keys1, keys2)
    return (obj1 == obj2)
}

console.log(deepEquals (obj1, obj2))



