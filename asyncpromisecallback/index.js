//Async js
//Callback, Promises, Async &await

const datas = [
    {
        name: "Yogesh", Profession:"sE"
    },
    {
        name:"mike", Profession:"Fe"
    }
]

// function getDatas(){
//     setTimeout(()=>{
//         let output=""
//         datas.forEach((data, index)=>{
//             output+=`<li> ${data.name}</li>`
//         })
//         document.body.innerHTML=output
//     }, 5000) // if 1000 then data will not get pushed inside the array of objects
// }

// function createData(newdata){
//     setTimeout(()=>{
//         datas.push(newdata)
//     },2000)
// }
// createData({name:"vivek", Profession:"SER"})

// getDatas();



//So CALLBACK introduced for remove dependency because of mismatch time to add

// function getDatas(){
//     setTimeout(()=>{
//         let output=""
//         datas.forEach((data, index)=>{
//             output+=`<li> ${data.name}</li>`
//         })
//         document.body.innerHTML=output
//     }, 1000) 
// }
// function createData(newdata, callback){
//     setTimeout(()=>{
//         datas.push(newdata)
//         callback()
//     },2000)
// }
// createData({name:"vivek", Profession:"SER"}, getDatas)



//So PROMISES , it takes 2 things resolve and reject

function getDatas(){
    setTimeout(()=>{
        let output=""
        datas.forEach((data, index)=>{
            output+=`<li> ${data.name}</li>`
        })
        document.body.innerHTML=output
    }, 1000) 
}

function createData(newdata){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            datas.push(newdata)
            let error = false;
            if(!error){
                resolve()
            }
            else{
                reject("Not Coorect")
            }
        },2000)
    })
   
}
// createData({name:"vivek", Profession:"SER"}).then(getDatas).catch(err=> console.log(err))

//So ASYNC & AWAIT

async function start(){
    await createData({name:"vivek", Profession:"SER"})
    getDatas()
}
start()