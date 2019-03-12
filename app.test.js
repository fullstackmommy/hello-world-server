const request = require("supertest")
const app = require("./app")

describe('Name of the group', () => {
    /* Alternative 1:
    test('should', done => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello', done) // should call done callback function. Otherwise, timeout

    })
    */

    // Alternative 2:
    test('should return hello with status code 200', () => {
        return request(app)
            .get('/')
            .expect(200)
            .expect('Hello')
    })

    // Alternative 3:
    test('should return student details with status code 200', async() => {
        await request(app)
            .get('/students')
            .expect(200)
            .expect('These are students')
    })
})