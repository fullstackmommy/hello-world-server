const express = require('express')
const router = express.Router()

const students = [
    {
        name: 'Bob',
        subjects: ['science', 'math']
    }, {
        name: 'Marley',
        subjects: ['english', 'math']
    }, {
        name: 'John',
        subjects: ['history', 'math']
    }
]

router
    .route('/')
    .get((req, res, next) => {
        res.json(students)
    })
    .post((req, res, next) => {
        const student = req.body
        student.id = '123'
        res.status(201)
        res.json(student)
    })

router
    .route('/:id')
    .put((req, res, next) => {
        //req.params.id
        res
            .status(202)
            .json(req.body)
    })
    .delete((req, res, next) => {
        res
            .status(202)
            .end()
    })

module.exports = router