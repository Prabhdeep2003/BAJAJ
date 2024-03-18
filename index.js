const express = require('express')
const router = require('./routes/routes')
const app = express()
const PORT = 4001

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.use(express.json())

app.use(router)