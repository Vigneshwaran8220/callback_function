// console.log("code base started")

// setTimeout(()=>{
//     console.log("hey i'm the timeout")
// }, 1000)

// console.log("code base end here");
// console.log("new code start")
// callback//
function welcomeGuest(name,callback){
    console.log(`hii ${name} welcome to our hotel please tell what do you need?`)
    callback(name)
}
function ordersFromGuest(name, callback){
    console.log("my orders are orders....")
    callback(name)
 }
 function dispatch(name,callback){
    console.log(`your orders are dispatched ${name}`)
    callback(name)
 }
 function greetings(){
    console.log("thankyou...")
 }
 function registerinHotel(name, fn){
    console.log(`hi ${name} your registered succesfully`)
    fn(name)
}

registerinHotel("teejay",setTimeout((name)=>{
    welcomeGuest(name,(name)=>{
        ordersFromGuest(name,(name)=>{
            dispatch(name,(name)=>{
                greetings();
            })
        })

    })
},1000))