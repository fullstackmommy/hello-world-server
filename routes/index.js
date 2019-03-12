const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.end("Hello")
})

router.get('/students', (req, res) => {
    res.end('These are students')
})

module.exports = router
