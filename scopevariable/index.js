//scope
//blockscope,functionscope,global scope

// var a=5 //global scope
// console.log(a)
//let and const are block scope
// {
//     var a=5
   
// }
// console.log(a) //5
// {
//     let a=5
//     // console.log(a) //5
// }
// console.log(a) //a is not defined , ie. it is block scope same with const


//VARIABLE SHADOWING
//note var con be shadow by let but not vice-versa

function test(){
    let a="Hello"
    if(true){
        let a="Hi Mooto"
        console.log(a)
    }
    console.log("outside if ",a)
}
test()
// function test(){
//     let a="Hello"
//     var b="Mike testing"
//     if(true){
//         let b="Hi Mooto"
//         var a = "Hello Bike" //geterror i.e illegal shadowing
//         console.log(a)
//         console.log(b)
//     }
//     console.log("outside if ",a)
// }
// test()


// //Declare variable
// //we cannot redeclare let and const 
// //var can be redeclare in same scope
// //But under shadowing can be reclare let but another scope
// //ie
// let a;
// {
//     let a;
// }

//DEclare without initialzation
//var and let allows but not const
// var a;

// let b;

// const c //error becoz require initialization so const c=5

//REINITializaiton
// var a=5
// a=10
// let a=5
// a=78
// const a=56
// a=67 //get error assignmnet to constant variable

//HOISTING
//to understand this we know how execution context work
//Here 2 phase Creation Phase, execution phase
//creation phase 3 things happen, global object, and setup memory heap for refernce, 3 and then intitalize variable with value "
//"undefined"
//example
// let a =10
// function multiply(x){
//     return x*10
// }
// let b=multiply(a)
// console.log(b)
//This is reporesntinoin creation phase below
// a=undefined
// multiply(){...}
// b=undefined

//During excution phase js assign line by line , and assign value to them 
//here use callstack we will discuss later
//now HOISTING continue
//here count variable declartion moved to top
// console.log(count)//undefined
// var count=1

// var count
// console.log(count)//1
// count=1

// console.log(count)//reference error variable not declar

// //here in LET we get error cannot access count before initialization it is hoisted in temporal deadzone
//Temporal deadzone is the time between the let and count variable declaration and intilization, they are in the scope but not been declared yet
// console.log(count)//error cannot access before initialization
// let count=1

// function abc(){
//     console.log(a)//undefined
//     var a=30;
// }
// abc()

function abd(){
    console.log(a,b,c)
    const c=30
    let b=20
    var a=30
}
abd()