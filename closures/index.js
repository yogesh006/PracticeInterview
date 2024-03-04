//CLOSURES 

//pehle sum function call kiya with value of a =2 and return function store 
//in store variable so now when in second time when store(5) call it retian the value of a 
//even after excuting the sum function,
//ek bar functino call then value retain means above

// var sum = function(a){ //anonymous function
//     console.log("hello "+a)
//     var c=4
//     return function(b){
//         return a+b+c
//     }
// }
// var store = sum(2)
// console.log(store(5))

// var sum = function(a,b,c){

//     return {
//         getSumTwo:function(){
//             return a+b
//         },
//         getSumThree:function(){
//             return a+b+c
//         }

//     }
    
// }
// var store = sum(3,4,5)
// console.log(store.getSumTwo())
// console.log(store.getSumThree())

// var store1 = sum(7,8,5)
// console.log(store1.getSumTwo())
// console.log(store1.getSumThree())

// function getCalc(a){

//     console.log(a)
//     var c= 10
//     return function(b){
//         return a+b+c
//     }
// }

// const store = getCalc(5)
// console.log(store(7))

//lexical scoping in closure imp:  the ability for a inner function scope to access variables from the parent scope.
//But opposite is not true 

// function subscribe(){
//     var name ="Hello Yogesh"
//     function displayName(){
//         alert(name)
//     }
//     displayName()
// }
// subscribe()

//Closure TimeOptimization 
// function find(index){
//     let a=[]
//     for(let i=0;i<10000000;i++){
//         a[i]=i*i
//     }
//     console.log(a[index])
// }
// console.time("6")
// find(6)
// console.timeEnd("6")
// console.time("50")
// find(50)
// console.timeEnd("50")


// function find(){
//     let a=[]
//     for(let i=0;i<10000000;i++){
//         a[i]=i*i
//     }
//    return function(index){
//         console.log(a[index])
//     }
  
// }
// const closure = find()
// console.time("6")
// closure(6)
// console.timeEnd("6")
// console.time("50")
// closure(50)
// console.timeEnd("50")

//var let scope 
// for(var i=0;i<3;i++){
//     setTimeout(function log(){
//         console.log(i)
//     },i*1000)
// }
//way to do this 
//1 iife
// for(var i=0;i<3;i++){
//     (function(i){
//         setTimeout(function log(){
//             console.log(i)
//         },i*1000)
//     })(i)
// }
//2 closures
// for(var i=0;i<3;i++){
//     setTimeout(
//         createFunction(i)
//     , i*1000)
// }
// function createFunction(value){
//     return function(){
//     console.log(value)
//     }
// }
//or
// for(var i=0;i<3;i++){
//     function displayName(i){ 
//     setTimeout(
//         function log(){
//             console.log(i)
//         }, i*1000)
//     }
//     displayName(i) //create memory for each iteration 
// }

//USE Closure to Create a Private Counter

// function counter(){
//     var _counter=0
//     function add(increment){
//         _counter+=increment
//     }

//     function retrieve(){
//         return "Counter= "+ _counter
//     }

//     return {
//         add,
//         retrieve
//     }
// }

// const c = counter()
// c.add(5)
// c.add(10)

// console.log(c.retrieve())

//What is MODULE PATTERN

//Module Pattern in JavaScript is a design pattern used to encapsulate and organize code.
// It provides a way to create private and public members, ensuring that only the necessary parts of
 // your code are exposed while hiding the rest. This helps in achieving modularity,
 //code reusability, and reducing the risk of naming conflicts in your applications.

//  var Module = (function(){
//     function privateMethod(){
//         //do something
//         console.log("private")
//     }

//     return {
//         publicMethod: function(){
//             //can call privateMethod()
//             console.log("public")
//            // privateMethod()
//         },
//         publicProperty: "I'm public"
//     }
//  })()
//  Module.publicMethod()//public
//  Module.privateMethod()//error is not a function

//Make CODE RUN ONLY ONCE
// let view;
// function fun(){
//     view="YogeshChannel"
//     console.log("Subscribe to ",view)

// }
// fun()
// fun()
// fun()

//we use concept of closure or we can create a generic function lodash Polyfill

// let view
// function fun(){
//     let called=0;
//     return function(){
//         if(called >0){
//             console.log("Already siubscribed ")
//         }
//         else{
//             view="YogeshChannel"
//             console.log("Subscriube to this channel :"+view)
//             called++
//         }
//     }
// }

// const check = fun()
// check()
// check()
// check()


// function once(func,context){
//     let ran;

//     return function(){
//         if(func){
//             ran = func.apply(context ||this, arguments)
//             func = null
//         }
//         return ran;
//     }
// }
// // const hello = ()=> console.log("hello")
// const hello = once((a,b)=>console.log("Heloo", a, b))
// hello(1,2)
// hello(1,2)
// hello(1,2)
// hello(1,2)

//IMPLEMENT CACHING /MEMOIZE FUNCTION

// const clumsySquare = (num1,num2)=>{
//     for(let i=1;i<=1000000;i++){
//     }
//     return num1*num2
// }
// console.time("First call")
// console.log(clumsySquare(9467,7649))
// console.timeEnd("First call")

// console.time("Second call")
// console.log(clumsySquare(9467,7649))
// console.timeEnd("Second call")

function memoize(fun,context){
    const res={}
    return function(...args){
      
        var argsCache = JSON.stringify(args)
        if(!res[argsCache]){
            console.log("first time")
           return res[argsCache]=fun.call(context ||this, ...args)
        }
        else{
            console.log("if already present")
            return res[argsCache]
        }
        // var argsCache = JSON.stringify(args)
        // if(!res[argsCache]){
        //     console.log("first time")
        //    return res[argsCache]=fun.call(context ||this, ...args)
        // }
        // else{
        //     console.log("if already present")
        //     return res[argsCache]
        // }
    }
}
// res={
//     "5,6":30
// }
const clumsySquare = (num1,num2)=>{
    for(let i=1;i<=1000000;i++){
    }
    return num1*num2
}
const efficient = memoize(clumsySquare)
console.time()
console.log(efficient(9467,7649))
console.timeEnd()

console.time()
console.log(efficient(9467,7649))
console.timeEnd()