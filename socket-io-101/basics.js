const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer((req, res) => {
    res.end('I\'m connected')
})

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:63342', // this port was provided by socket.io
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket, req) => {
    socket.emit('welcome', 'Welcome to websocket server!')
    socket.on('message', msg => {
        console.log(msg)
    })
})

server.listen(8000)
