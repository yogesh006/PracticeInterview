//APPLY, CALL & BIND 


// CALL : 
//So for calling same again same for few records so use call i.e function borrow
// let userDetails={
//     name:"Yogesh",
//     age:27,
//     Designation:"SE",
//     printDetails:function(){
//         console.log(this)
//     }
// }
// userDetails.printDetails()

// let userDetails2={
//     name:"mike",
//     age:29,
//     Designation:"SE",
   
// }
// userDetails.printDetails.call(userDetails2)


let userDetails={
    name:"Yogesh",
    age:27,
    Designation:"SE",
  
}
let printDetails=function(){
    console.log(this)
}
printDetails.call(userDetails)

let userDetails2={
    name:"mike",
    age:29,
    Designation:"SE",
   
}
printDetails.call(userDetails2)

//call and apply me difference hai ki parameter pass
let userDetails3={
    name:"Mike23",
    age:27,
    Designation:"SE",
  
}
let printDetails1=function(state, country){
    console.log(this.name +" "+ state+ " "+ country)
}
printDetails1.call(userDetails3, "Delhi", "India")

//APPLY in apply we just pass array, not in individual values

printDetails1.apply(userDetails3, ["Lucknow", "India"])

//BIND
//in bind we doesn't direct function call, here we make copy and call
//whenever we need

let newFun = printDetails1.bind(userDetails3, ["Bihar", "India"])
newFun()