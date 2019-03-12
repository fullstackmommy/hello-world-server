const express = require('express');
const app = express()

const logger = require("./logger")
const index = require('./routes/index')
const students = require('./routes/students')

app.use('/', index)
app.use('/students', students)

app.use(logger)

app.get("/about", (req, res) => {
    res.send("About")
})

module.exports = app;