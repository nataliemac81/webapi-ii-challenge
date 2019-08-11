const express = require('express')

const server = express()

server.use('/', (req, res) => res.send('API up and running!'))

server.listen(4000, () => console.log('API running on port 4000...'))