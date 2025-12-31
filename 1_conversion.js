let s = "swapnil"
c1= Number(s)
let b1 = true
let c2 = Number(b1)
let b2 = 7
let c3 =Boolean(b2)


console.log(c2)
console.log(c1)
console.log(c3)
console.log(null>=0)

// data types
id = Symbol("123")
id2 = Symbol("123")
console.log(id==id2)


// BigInt
let bigInt1 = BigInt(1234567890123456789012345678901234567890)
let bigInt2 = 1234567890123456789012345678901234567890n
console.log(bigInt1)
console.log(bigInt2)
console.log(typeof bigInt1)
// array 
arr = [1,2,3,4,"swapnil",true]
console.log(arr)
console.log(typeof arr)  //object
console.log(Array.isArray(arr))  

// object
obj = {name:"swapnil", age:24, isMarried:false}
console.log(obj)
console.log(typeof obj)  //object
// function
function greet(){
    return "Hello World"
}
const greet2 = function(){  //threat as variable
    return "Hello World 2"
}
const greet3 = () => "Hello World 3"  //arrow function
console.log(greet())
console.log(greet2())
console.log(greet3())
console.log(typeof greet)  //function