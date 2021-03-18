const express = require('express')
const bodyParser = require('body-parser')
// const swaggerUi = require('swagger-ui-express')

const config = require('../config.js')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const cart = require('./components/cart/network')
const cinema = require('./components/cinema/network')
const film = require('./components/film/network')
const schedule = require('./components/schedule/network')
const seats = require('./components/seats/network')

const errors = require('../network/errors')

const app = express()

app.use(bodyParser.json())

// Router
app.get('/', function (req, res) {
    res.send('Api Found!')
})
app.use('/api/auth', auth)
app.use('/api/user', user)
app.use('/api/cart', cart)
app.use('/api/cinema', cinema)
app.use('/api/film', film)
app.use('/api/seats', seats)
app.use('/api/schedule', schedule)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors)

app.listen(config.api.port, () => {
    console.log(`Server runninning on port ${config.api.port}`)
})