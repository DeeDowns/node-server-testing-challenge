const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db-connection')


describe('userRouter', () => {
    describe('GET to /', () => {
        it('should return http status code 200', async () => {
            const res = await supertest(server).get('/')

            expect(res.status).toBe(200)
        })

        it('should return collection of users', async () => {
            await supertest(server).get('/')

            const users = await db('users')

            expect(users).toHaveLength(2)
        })
    })
})