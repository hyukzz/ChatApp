const express = require('express')
const http = require('http')
const app = express()
const path = require('path')
const server = http.createServer(app)
const socketIO = require('socket.io')
const io = socketIO(server)
// console.log('Hello')

app.use(express.static(path.join(__dirname, 'src'))) //운영 체제마다 경로가 다름

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server is running ${PORT}`))

io.on('connection', socket => {
	console.log('socket')
})
