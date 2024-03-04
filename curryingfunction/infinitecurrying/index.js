// //infinite currying

// function add(a){
//     return function(b){
//         return function(){
//             return a+b
//         }
//     }
// }
// console.log(add(4)(5)())

// console.log(add(4)(5)(7))// outpur same not work for 7 need to add again argunment

//so to handle this

function add(a){
    return function(b){
        if(b){
            return add(a+b)
        }
            return a
        
    }
}
console.log(add(11)(5)(3)(1)())