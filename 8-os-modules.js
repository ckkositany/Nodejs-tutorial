
const os = require('os')

const user= os.userInfo()
console.log(user)
const uptime = os.uptime()
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freememe: os.freemem()
}
console.log(currentOs)
    /*
const machine= os.machine()
console.log(machine)
const network=os.networkInterfaces()
console.log(network)


const cpu=os.cpus()
console.log(cpu)
*/