import app from '../app'
import request from 'supertest'

describe('POST request to endpoint /analyze', () => {
    it('should respond with results in json', async () => {
        const response = await request(app)
        .post('/analyze')
        .send({
            text : 'hello hi hei'
        })
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual({"characterCount": [{"e": 2}, {"h": 3}, {"i": 2}, {"l": 2}, {"o": 1}], "textLength": {"withSpaces": 12, "withoutSpaces": 10}, "wordCount": 3})
    })

    it('should resond with error if wrong data is sent', async () => {
        const response = await request(app)
        .post('/analyze')
        .send({
            wrong : 'data'
        })
        expect(response.statusCode).toEqual(400)
    })

})