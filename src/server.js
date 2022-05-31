const express = require('express')
const routes = require('./routes')
const port = 3010

const app = express()

app.use(routes)

app.listen(port, () => {
    console.log(`       ✅  Backend started at http://localhost:${port}`)
})
