const execa = require('execa')
const sleep = (m) => new Promise((r) => setTimeout(r, m))

const ip = '8.8.8.8'

while(true) {
    const result = execa.commandSync(`ping ${ip} -q -c 3`)
    let time = new Date()
    time = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    const latency = result.stdout.split('=')[1].split('/')[1]
    console.log(`Latency is: ${latency} ms at ${time}`)
    sleep(1000)
}
