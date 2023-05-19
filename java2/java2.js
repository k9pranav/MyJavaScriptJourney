const string1 = "Pranav";
const string2 = "Kansal";


//Cheching the difference between different slicing
const ToBeSliced = "I love the Odin Project!";
//Trying Slice: slice(start,end). Also takes in negative values
let sliced1 = ToBeSliced.slice(2, 6)
console.log(sliced1)
console.log(ToBeSliced.slice(-1, ))

//Trying substring. Same as slice. But only takes in positive values
let sliced2 = ToBeSliced.substring(1,9)
console.log(sliced2)

//Trying substr. string.substr(start, length)
let sliced3 = ToBeSliced.substr(2,4);
console.log(sliced3) 


