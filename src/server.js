require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')
const connectToDatabase = require('./database')

connectToDatabase()

const port = 3010

const app = express()

app.use(routes)

app.listen(port, () => {
    console.log(`       ✅  Backend started at http://localhost:${port}`)
})
