function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    var name = process.argv
    var n = name.length
    return name[n-1]
}

function getNameFromEnv() {
    // Write your code here
    var Name = process.env.name
    return Name
}

function getNameFromReadLine() {
    // Write your code here
    const readline = require('readline')
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    rl.question('',(answer) => {
        console.log(answer) 
        rl.close();
    });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}