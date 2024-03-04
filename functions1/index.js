//First class function: other function passef as argument
// function square(num){
//     return num*num
// }
// function displaySquare(fn){
//     console.log("Square is "+fn(5))
// }
// displaySquare(square)


//each iteration of the loop creates a new scope, and 
//the i variable is captured by the setTimeout callback function for that specific iteration.
// for(let i=0;i<5;i++){ //blockscope
//     setTimeout(function(){
//         console.log(i) // 0 1 2 3 4
//     }, i*1000)
   
// }
// second block where you use var, there is only one variable i that is shared across all iterations of the loop. 
//The setTimeout callbacks do not capture the value of i" at the time they are created. Instead, they capture a reference to the same ivariable, which is modified as the loop iterates.
// By the time thesetTimeoutfunctions execute, the loop has completed, and the value ofiis5` (the exit condition of the loop).
//To achieve the expected behavior in the var version, you can use a closure to capture the value of i at each iteration:
// for(var i=0;i<5;i++){ //global scope
//     setTimeout(function(){
//         console.log(i) // (1,2,3,4,5)5
//     }, i*1000)
   
// }

//i.e By creating an immediately-invoked function expression (IIFE) inside the loop,
// you ensure that the value of i at each iteration is captured and preserved for the corresponding setTimeout callback
// for(var i=0;i<5;i++){ 
//     (function(i){
//         setTimeout(function(){
//             console.log(i) 
//         }, i*1000)
//     })(i)
  
   
// }

//Function Hoisting
// var x=21
// var fun = function(){
//     console.log(x)//undefined
//     var x=20
// }
// fun()

// fun() //error fun is not a function 
// var fun = function(){
//     console.log("Hi")
  
// }

//Arrow function vs regular function
//1-syntax
//2-Implicit return keyword
//3-arguments
//4-this keyword
// let user={
//     username:"roadside",
//     rec1:()=>{
//         console.log("Hellow "+ this.username) //points to function wraped context ,i.e. here is global context
//     },
//     rec2(){
//         console.log("Hellmike "+this.username) //points to currect scope context
//     }
// }
// user.rec1()
// user.rec2()


var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
