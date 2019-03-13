const express = require('express');
const app = express();

//middleware

const logger = require("./logger");
const index = require('./routes/index');
const students = require('./routes/students');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(logger);

app.get("/about", (req, res) => {
    res.send("This is an about page")
});

app.get("/greet/:name", (req, res) => {
    const {name} = req.params
    res.send(`Hello, ${name}`)
});

app.get("/greet", (req, res) => {
    const {name, greet} = req.query
    res.send(`${greet}, ${name}`)
});

app.post("/greet", (req, res) => {
    const {name} = req.body
    res.send(`Hello, ${name}`)
});

app.post("/form", (req, res) => {
    const {name} = req.body
    res.send(`Hello, ${name}`)
});

app.use('/students', students);
app.use('/', index);

module.exports = app;
