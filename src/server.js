const express = require('express')
const routes = express.Router()
const port = 3010

routes.get('/', (req, res) => res.send('Hello Test'))

const app = express()

app.use(routes)

app.listen(port, () => {
    console.log(`       ✅ Backend started at http://localhost:${port}`)
})
