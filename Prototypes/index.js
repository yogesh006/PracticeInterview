//object creation

// //1
// const obj = new Object({
//     name: "Yogesh"
// })
// //2
// const obj = new obj()
// //3
// const obj = {
//     name:"Yogesh"
// }

const obj = {
    name:"yogesh",
    getName:function(){
        this.name
    },
    getRoll:function(){
        return this.roll
    }
}
console.log(obj)

// const obj2 = {
//     roll:1
// }
// console.log(obj2)
//i want to access name from obj2
// so I want as a prototype jaye 
const obj2 = {
    roll:1,
    name:"Vivek",
    __proto__:obj
}
console.log(obj2)
console.log(obj2.getName())
console.log(obj2.getRoll())
//Note protoype matlab giving provision to use also other function

const obj3={
    class:"MCA",
    __proto__:obj2
}
console.log(obj3)//here sare function accessible hai throuth 
//protoytpical inheritance

const array=["Yoges1"]
console.log(array)

const array1 = new Array()
console.log(array1)



//polyfills

//Adding show method in Array protoytype
Array.prototype.show = function(){
    return this;
}
const cities = ["Delhi"]
console.log(cities.show())
//Adding array into convertIntoObject 
Array.prototype.convertIntoObject = function(){
    let newObj = {}
    this.forEach(element=>{
        newObj[element]=element
    })
    return newObj
}
console.log(cities.convertIntoObject())

//how to make self prototype not like above using object
function MyPrototype(name){
    this.name=name
}
const myProto = new MyPrototype("Adil")
console.log(myProto)

//side object upar wala dal do iske andar
MyPrototype.prototype = obj
const myProto1 = new MyPrototype("Adil")
console.log(myProto1)