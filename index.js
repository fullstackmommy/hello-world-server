const http = require('http');
const port = 8080
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === "/watermelon") {
        res.end('🎈')
    } else {
        res.end("Hello")
    }
})

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)

})