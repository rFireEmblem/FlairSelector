const fs = require('fs')

let obj = JSON.parse(fs.readFileSync('./em.json'))

let keys = Object.keys(obj)

for (let i = 0; i < keys.length; i++){
    obj[keys[i]].sort()
}

fs.writeFileSync('em.json', JSON.stringify(obj))