const http = require('http')

const webSocket = require('ws')

const server = http.createServer((req, res) => {
    res.end('I\'m connected')
})

const wss = new webSocket.Server({server})

wss.on('headers', (headers, req) => {
    console.log(headers)
})

wss.on('connection', (ws, req) => {
    ws.send('Welcome to websocket server!')
    ws.on('message', msg => {
        console.log(msg)
    })
})

server.listen(8000)
