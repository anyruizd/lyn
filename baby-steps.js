const argsLength = process.argv.length
const args = process.argv.slice(2, argsLength)

function sum(args) {
  return args
    .map(arg => Number(arg))
    .reduce((acc, cur) => acc + cur, 0)
}

console.log(sum(args))
