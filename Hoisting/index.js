//Hoisting : memory mgmt
//it is singlethread 

// var a=5
// function getName(){
//     console.log("Yogesh M")
// }
// getName()
// console.log(a) //5
// //ye jab run hota hai to globalexecution context me jata and store value in ofrm 
//of key value pair


getName()
console.log(a) //undefined
var a=5
function getName(){
    console.log("Yogesh M")
}


test() //reference error treat as vaariable,cannot call before initialization
console.log(a) //reference error not define

const test = ()=>{
    console.log("YogeshMNNA")
}