const express = require('express')
const router = require('./routes/routes.js')
const app = express()
const PORT = 4005

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.use(express.json())

app.use(router)
