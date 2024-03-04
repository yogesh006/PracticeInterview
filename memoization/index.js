//Implementing Memoization in JS
//Memoization is an optimization technique that can be used toreduce 
//time-consuming calculations by saving previous input to something called cache 
//and returning the result from it.

// let sum=0

// function Calc(params) {
//     for(let i=0;i<params;i++){
//         sum+=i
//     }
//     return sum
// }
// const memoize = (fun)=>{
//     let cache={}
//     return function(...args){
//         let n=args[0]
//         if(n in cache){
//             console.log("cache 1")
//            return cache[n] 
//         }
//         else{
//             console.log("calculation first time")
//             let result = fun(n)
//             cache[n]=result
//             // return result
//             return cache[n]
//         }
        
//     }
// } 


// // console.time()
// // console.log(Calc(5))
// // console.timeEnd()

// console.time()
// const efficient = memoize(Calc)
// console.log(efficient(5))
// console.timeEnd()

// console.time()
// console.log(efficient(5))
// console.timeEnd()



let sum = 0;

function Calculate(params){
    for(let i=0;i<params;i++){
        sum+=i;
    }
    return sum;
}


const memoizeValue = (fun)=>{
    let cache = {}

    return function(...args){
        let n = args[0]
        if(n in cache){
            console.log('return from cahced')
            return cache[n]
        }
        else{
            console.log('calculate first time')
            let result = fun(n);
            cache[n]  = result;
            return cache[n]
        }
    }
}
console.time()
const efficientValue = memoizeValue(Calculate);
console.log(efficientValue(2000))
console.timeEnd()


console.time()
console.log(efficientValue(2000))
console.timeEnd()

// console.time()
// console.log(Calculate(2000))
// console.timeEnd()
