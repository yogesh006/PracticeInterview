//debouncing and throttleing not provide by javascript, it is provided by setTimeout webapi
//unwanted calls are used , they can be used any where like enter in searchbase and api hit 
//not hit api for every character , useit after a certain timeout after somecharater
//children not ask chocalte they will get after 1 hour, if it ask in between then time starts again from start

let counter=0
function getData(){
    console.log("fetching data " +counter++)
}

function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout// if user click in netween then again time start if other not executed 
        timer=setTimeout(()=>{
            call() //here callback getdata called
        },d)
    }
}

const betterFunction = myDebounce(getData, 1000)