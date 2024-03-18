const { handleData } = require('../handleSubmit')

const router = require('express').Router()

router.post('/bfhl',handleData)

module.exports = router