const net = require('net')
const port = process.argv[2]

const server = net.createServer((socket) => {
  const date = new Date()
  const year = date.getFullYear() 
  const month = date.getMonth() + 1 // starts at 0
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const data = `${year}-0${month}-0${day} ${hour}:${minutes}`

  socket.write(data)
  socket.end('\n')
})

server.listen(port)