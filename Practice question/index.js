//Array 

// myObj = [
//     {
//         id:1,
//         name:"John23",
//         isActive:true,
//         age:20
//     },
//     {
//         id:2,
//         name:"Nike",
//         isActive:true,
//         age:22
//     },
//     {
//         id:3,
//         name:"Yogesh",
//         isActive:false,
//         age:28
//     }
//     ,
//     {
//         id:4,
//         name:"John",
//         isActive:true,
//         age:23
//     },
//     {
        
//             id:5,
//             name:"Ted",
//             isActive:false,
//             age:12
        
//     },
//     {
        
//         id:6,
//         name:"John",
//         isActive:false,
//         age:15
    
// }
// ]

//level-0
// let object = []
// for(let i =0;i<myObj.length;i++){
//     object.push(myObj[i].name)
// }
// console.log(object)

//level-1
// myObj.forEach((element)=>{
//    object.push(element.age)
// })
// console.log(object)

//level2
// myObj.forEach((element)=>{
//     if(!element.isActive){
//     object.push(element.name)
//     }
//  })
//  console.log(object)


// const object1 = myObj.filter((user)=> !user.isActive).map((element)=> element.name)
// console.log(object1)

// myObj.sort((user1, user2)=> user1.age > user2.age ? 1:-1)
// console.log(myObj)

// const object1 = myObj.filter((user)=> user.isActive).sort((user1, user2)=> user1.name > user2.name ? 1:-1).map((element)=> element.name)
// console.log(object1)


// const isNameExist=(myObj, name)=>{
//     let ele = false
//     for(let i=0;i<myObj.length;i++){
//         if(myObj[i].name === name){
//             ele = true
//         }
//     }
//     return ele;
// }

// const isNameExist =(myObj, name)=>{
//    const value= myObj.find((user)=>user.name=== name)
//     return Boolean(value)
// }

// const myVar = isNameExist(myObj, "Garima")
// const myVar = isNameExist(myObj, "John")
// console.log(myVar)


// const isNameExist =(myObj, name)=>{
//     const value= myObj.findIndex((user)=>user.name=== name)
//      return value>=0
//  }

// const isNameExist =(myObj, name)=>{
//     const value= myObj.some((user)=>user.name=== name)
//      return value
//  }


//  const myVar = isNameExist(myObj, "John23")
//  console.log(myVar)

// const arr1 = [2,5,1]
// let newArr=[]
// function append(arr1, ele){
    
    
//     return newArr
//     // return [...arr1, ele]
//     // arr1.push(ele)
//     // return arr1
// }

// console.log("value of NewARR " +newArr)
// console.log(append(arr1, 10))
//  console.log("value of ", arr1)

// const arr=[2,3,4,4,6,7,6,8,0]
// function removeDuplicate(){
//         return [...new Set(arr)]
// }
// console.log(removeDuplicate())


// const arr=[2,3,4,4,6,7,6,8,0]
// let uniqueArray = (arr) =>{
//     const newArr=[]
//     arr.forEach((element)=>{
//         if(!newArr.includes(element)){
//             newArr.push(element)
//         }
       
//     })
//     return newArr
// }

// console.log(uniqueArray(arr))

// const arr2 = [1,2,3,3,4,4,5]
// const arrayReduce =(arr2)=>{
//     return arr2.reduce((acc, element)=>{
//         return acc.includes(element) ? acc : [...acc, element]
//     },[])
// }
// console.log(arrayReduce(arr2))

// const arr3=[5,4,6]
// const arr4 = [7,3,1,9]
// const concat1=(arr3,arr4)=>{
//     return arr3.concat(...arr4)
    
//     // return [...arr3,...arr4]
// //    arr3.push(...arr4)
// //    return arr3
// }
// const mergeArray= concat1(arr3,arr4)
// console.log(mergeArray+" cc "+ arr3+ " mk "+arr4)

// var length = 90
// function getAddValue(){
//     console.log(this.length)
// }

// var Obj = {
//     length:5,
//     method:function(getAddValue){
//         getAddValue()
//         arguments[0]();
//     }
// }
// var value = Obj.method(getAddValue, 2) //90 2

// !function(){
//     console.log("HEOLLO IIFE")
// }

//Ways to declare IIFE
// (function(){
//     console.log("Hi MIKE")
// })()

// var dataResult = !function(){
//     return "Hello MIke"
// }();

// console.log(dataResult)

// var myFunc = function() {
//     return "GeeksforGeeks";
//   };
  
//   var exclamationIIFE = !function() {
//     return "GeeksforGeeks";
//   }();
  
//   var parenthesesIIFE = (function() {
//     return "GeeksforGeeks";
//   })();
  
//   console.log(myFunc()); 
//   console.log(exclamationIIFE); 
//   console.log(parenthesesIIFE); 
  