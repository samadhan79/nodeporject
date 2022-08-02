const os = require('os');
const { uptime } = require('process');
let currOs ={
    name:os.type(),
    arch:os.arch(),
    platform:os.platform(),
    vesion:os.version(),
    uptime:os.uptime(),
    info:os.userInfo()

}
console.log(currOs)