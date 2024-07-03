var array = [1, 2, 3, 4, 5]

function reverseArray (array){
    var new_array = []

    for (let i = 0; i < array.length; i++){
        new_array.push(array[array.length - (i + 1)])
    }

    return new_array
}

console.log(reverseArray(array))