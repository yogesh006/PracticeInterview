//map,filter,reduce :all allow chaining
//MAP:creates anew array and return all new values

// const nums=[1,2,3,4]
// const multiplyThree = nums.map((num)=>num*4)
// console.log(multiplyThree)
// const nums=[1,2,3,4]
// const multiplyThree = nums.map((num, i,arr)=>{
//     return num*3 + i;
// })
// console.log(multiplyThree)

//FILTER: same as map return new array
// const nums = [1,2,3,5]
// const filterData = nums.filter((ele)=> {return ele>2})
// console.log(filterData)

//REDUCE
// const nums = [1,2,3,4]
//reduce this array and print sum
//take 2 thing callback , acc, currentvalue and index and array
//acc is result of previous of current value
// const sum= nums.reduce((acc, curr)=>{
//     return acc+curr
// },0)
// console.log(sum)


//POLYFILL for map

//Array.map((num,i,arr)=>{})
// Array.prototype.myMap=function(cb){
//     let temp=[]
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i], i, this))
//     }
//     return temp

// }

// const nums=[1,2,3,4]
// const multiplyThree = nums.myMap((ele)=>{
//     return ele*3;

// })
// console.log(multiplyThree)

//POLYFILL for FILTER

// Array.prototype.myFilter = function(cb){
//     let temp = []
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i])
//         }
//     }
//     return temp
// }
// const nums=[1,2,3,4]
// const newfilter = nums.myFilter((ele)=>{
//     return ele>2;

// })
// console.log(newfilter)


//POLYFILL of Reduce
//arr.proprotype((acc,curr,i,arr)=>{},initialvalue)
// Array.prototype.myReduce = function(cb, initialvalue){
//     var accumulator = initialvalue
//     for(let i=0;i<this.length;i++){
//         accumulator=accumulator ? cb(accumulator, this[i],i,this) : this[i]
//     }
//     return accumulator
// } 
// const nums=[1,2,3,4]
// const sum= nums.myReduce((acc, curr)=>{
//     return acc+curr
// },0)
// console.log(sum)

//Map vs forEach
//map return new array but forEach doesnot
// const arr=[2,5,3,4,7]
// const mapResult = arr.map((arr)=>{
//     return arr+2
// })

// const forEachResult = arr.forEach((arr)=>{
//     return arr+2
// })
// console.log(mapResult," Hi ", forEachResult)

//To modified the orignial array in for each we use inside of it
// const arr=[2,5,3,4,7]
// const mapResult = arr.map((arr)=>{
//     return arr+2
// })

// const forEachResult = arr.forEach((a, i)=>{
//     arr[i] =  a+3
// })
// console.log(mapResult," Hi ", forEachResult," vale ", arr )
//we can use chaining in maplike map().filter() but not in forEach

//OUTPUT question
let students = [
    {name:"Piyush", rollNumber:35, marks:80},
    {name:"Jenny", rollNumber:33, marks:30},
    {name:"Kaushal", rollNumber:25, marks:90},
    {name:"Dilpreet", rollNumber:55, marks:81}
]

//Print Name

//1
// let Obj = []
// students.map((ele)=>{
//     Obj.push(ele.name.toUpperCase())
// })
// console.log("value of Obj ", Obj)
//OR
// const names=students.map((stu)=>stu.name.toUpperCase())
// console.log(names)

//2
// let Obj={}
// students.map((ele)=>{
//     Obj[ele.name]=ele.name
// })
// console.log(Obj)
//3
// let Obj=[]
// students.filter((ele)=>{
//     Obj.push(ele.name)
// })
// console.log(Obj)
//4
// let Obj=[]
// for(let i=0;i<students.length;i++){
//     Obj.push(students[i].name.toUpperCase())
// }
// console.log(Obj)

//Print Score 50 marks
// const marksG = students.filter((ele)=>{
//     return ele.marks>50
// })
// console.log(marksG)

//Print marks greater than 50 and rollnumber50
// const details = students.filter((ele)=> {
//     return ele.marks>60 && ele.rollNumber>26
// })
// console.log(details)

//sum of marks all students
// const sum = students.reduce((acc,curr)=>{
//     return acc+curr.marks
// },0)
// console.log(sum)

//return name of student who score more than marks
// const names = students.filter((stu)=>stu.marks>60).map((ele)=> ele.name)
// console.log(names)

//return total marks for the student with marks >60 after 20 makrs have been added to whose smaller than 60 means 20 marks to those student 
const totaMarks = students
.map((stu)=>{
    if(stu.marks <60){
        stu.marks +=20
    }
    return stu
})
.filter((m)=>{
    return m.marks>60
})
.reduce((acc,curr)=>{
    return acc+curr.marks
},0)

console.log(totaMarks)
// console.log(students)