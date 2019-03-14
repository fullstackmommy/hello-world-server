const request = require("supertest")
const students = require("../../routes/students")
const app = require("../../app")

const studentData = [
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

describe('Students', () => {

    describe('/students', () => {
        const route = "/students"
        test("Gets all students", () => {
            return request(app)
                .get(route)
                .expect(200)
                .expect("Content-Type", /json/)
                .expect(studentData)
        });

        test("Register a student", () => {
            return request(app)
                .post(route)
                .send({name: "Bob"})
                .set("Accept", "application/json")
                .expect(201)
                .then(res => {
                    expect(res.body).toEqual(expect.any(Object))
                    expect(res.body).toEqual({
                        id: expect.any(String),
                        name: "Bob",
                        subjects: expect.any(Array)
                    })
                })
        })
    })

    describe("/students/123", () => {
        const route = "/students/123"
        test("Update a student's name", () => {
            return request(app)
                .put(route)
                .send({name: "Alfred"})
                .expect(202)
                .expect({name: "Alfred"})
        })

        test("Delete a student's record", () => {
            return request(app)
                .delete(route)
                .expect(202)
        })
    })
});
