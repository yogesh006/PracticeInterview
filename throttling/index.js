//throttling
//if button click data is getting saved
//so in throttling if user click 2 or more times then 2 bar entry jayegi db me
//we disable button when user button hit till db data saved

const myThrottle = (call, d)=>{
    return function(...args){
    document.getElementById("myid").disabled=true
    setTimeout(()=>{
        call()
    },d)

}

}
const newFun=myThrottle(()=>{
    document.getElementById("myid").disabled=false
    console.log("Hello motto")
}, 2000)