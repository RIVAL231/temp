const os=require(`os`)
//info about user

const user = os.userInfo()
// console.log(user)

//returns the system uptime in seconds

// console.log(`the system uptime is ${os.uptime()}`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()
}
console.log(currentOS)