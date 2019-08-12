const express = require('express')

const apiRoutes = require('./api/apiRoutes')

const bodyParser = require('body-parser')



const server = express()

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())


server.use('/api', apiRoutes)

server.listen(4000, () => console.log('API running on port 4000...'))