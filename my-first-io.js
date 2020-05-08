const fs = require('fs')
const path = process.argv[2]

const file = fs.readFileSync(path).toString()
const lines = file.split('\n').length  - 1

console.log(lines)
