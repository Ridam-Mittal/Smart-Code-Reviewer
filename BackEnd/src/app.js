const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

// app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['POST', 'GET']
}));


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app