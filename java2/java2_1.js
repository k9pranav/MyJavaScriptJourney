//Creating Functions

function FavAnimal(animal) {
    return animal + " is my favourite animal"

}

console.log(FavAnimal("Monkey"))

function add7(num){
    return num + 7
}

console.log(add7(7))

function multiply(num) {
    return num*2
}

console.log(multiply(3))

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1,) 
} 

console.log(capitalize('pranav'))

function lastLetter(word){
    return word.substr(-1, 1)

}

console.log(lastLetter('pranav'))