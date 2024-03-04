//question
// evaluate("sum")(4)(2)=>6
// evaluate("multiply")(4)(2)=>8
// evaluate("divide")(4)(2)=>2
// evaluate("subtract")(4)(2)=>2

// function evaluate(operation){
//     return function(a){
//         return function(b){
//             if(operation=="sum") return a+b
//             else if(operation=="multiply") return a*b
//             else if(operation=="divide") return a/b
//             else if(operation=="subtract") return a-b
//             else  return "Nope !!"
//         }
//     }
   
// }

// const result = evaluate("sum")
// const result1 = evaluate("multiply")
// const result2 = evaluate("divide")
// console.log(result(4)(2))
// console.log(result1(4)(2))
// console.log(result2(4)(2))


//CURRYING VS PArtial APPLICATION
//Partial applcn
// function sum(a){

//         return function(b,c){
//             return a+b+c
//         }
// }
// const x= sum(10)
// console.log(x(5,6))
// //or
// console.log(sum(10)(1,2))

// //Currying : same function return, same function call
// function sum(a){

//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

//MANIPULATING DOM
// function updateElementText(id){

//     return function(content){
//         document.querySelector("#"+id).textContent = content;
//     }
// }
// const updateContent = updateElementText("heading")
// // updateContent("Hello MIKE")
// updateContent("Hello DATA")

// CONVERT Normal function into CURRYING Function
//i.e converts f(a,b,c) into f(a)(b)(c)

function curry(func){
    return function curriedFunc(...args){
        console.log(args.length, func.length)
        if(args.length >=func.length){
            console.log("Last exceuted one time")
            return func(...args)
        }
        else{
            //return function(...next): This inner function takes another set of arguments (...next)
            // and combines them with the previous set of arguments (...args).
            return function(...next){
                return curriedFunc(...args,...next)
            }
        }

    }
}

const sum=(a,b,c,d) => a+b+c+d
const totalSum = curry(sum)
console.log(totalSum(1)(5)(4)(6))