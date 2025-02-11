const http = require('http')
const index = require('./index')
const PORT = process.env.PORT || 3000

const server = http.createServer(index)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})