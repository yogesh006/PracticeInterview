//ES6
//rest and spread operator
//1. used with array and objects

//REST : isme element pass will get combine
// function add(a,b,c){
//     return (a+b+c);
// }

// const valueResult = add(10,20,40)
// // const valueResult = add(10,20,40,8,9)
// console.log(valueResult)

// function add(a,b,c, ...other){
//     console.log(other)
//     console.log(other[1])
//     return (a+b+c);
// }


// const valueResult = add(10,20,40,8,9)
// console.log(valueResult)

//SPREAD : isme we split the element

// var names = ["Yogesh", "Mike", "Nilesh"]

// function getNames(name1, name2, name3){
//     console.log(name1, name2, name3)
// }

// // getNames(names[0],names[1],names[2])
// // getNames(...names)
// getNames(names)

//upar wale sab array ke sath the
//ab Objects ke sath 
//value of override kaise karte hai ?

//REST
var student={
    name: "Yogesh",
    age: 27,
    hobbies : ["cricket", "singing"]
}

// // const age = student.age
// // console.log(age)
// // const {age} = student //arraydestructuring
// // console.log(age)
//  const {age , ...other} = student
//  console.log(other, age)

 //SPREAD

//  var newStudent = {
//     ...student
//  }

//  console.log(newStudent)

var newStudent = {
    ...student,
    age:29
 }

 console.log(newStudent)