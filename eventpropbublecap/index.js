//Event Bubbling & Capturing
//Stop Propagation, Immediate Propagation & Prevent Default

//EVENT BUBBLING child to parent means button me register nhi but but parent tak check karega, means propagation
// var div = document.querySelector('div')


// div.addEventListener("click", ()=>{
//     console.log("div hitten")
// })

// var div = document.querySelector('div')
// var button = document.querySelector('button')

// div.addEventListener("click", ()=>{
//     console.log("div hitten")
// })
// button.addEventListener("click", ()=>{
//     console.log("button hitten")
// })
//i.e child to parent propagate

//EVENT CAPTURING isme opposite hota hai ye kam dikhta hai parent to child
//i.e parent to child

// var div = document.querySelector('div')
// var button = document.querySelector('button')

// div.addEventListener("click", ()=>{
//     console.log("div hitten")
// },true)
// button.addEventListener("click", ()=>{
//     console.log("button hitten")
// },true)

//STOP PROPAGATION
//we use to stop div logic i.e run default in event bubbling
// var div = document.querySelector('div')
// var button = document.querySelector('button')

// div.addEventListener("click", ()=>{
//     console.log("div hitten")
// })
// button.addEventListener("click", (event)=>{
//     event.stopPropagation()
//     console.log("button hitten")
// })
//i.e parent ko nhi dekega

//IMMEDIATE PROPAGATION

var div = document.querySelector('div')
var button = document.querySelector('button')

div.addEventListener("click", ()=>{
    console.log("div hitten")
})
button.addEventListener("click", (event)=>{
   
    console.log("button hitten")
})

button.addEventListener("click", (event)=>{
   event.stopImmediatePropagation()
    console.log("button1 hitten")
})