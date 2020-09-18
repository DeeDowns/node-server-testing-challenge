const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db-connection')


describe('userRouter', () => {

    // afterAll(async () => {
    //         //truncate/empty the hobbits tsble
    //         await db('users').truncate()
    //     }) 

    describe('GET to /', () => {

        it('should return http status code 200', async () => {
            const res = await supertest(server).get('/')

            expect(res.status).toBe(200)
        })

        it('should return collection of users', async () => {
            await supertest(server).get('/')

            const users = await db('users')

            expect(users).toBe(2)
        })
    })

    describe('POST to /users', () => {

        it('should return http status code 201 when passed the correct data', () => {
            return supertest(server)
            .post('/users')
            .send({ name: 'Killua' })
            .then( res => {
                expect(res.status).toBe(201)
            })
        })

        it('should return http status code 400 when passed the correct data',  () => {
            return supertest(server)
            .post('/users')
            .send({})
            .then( res => {
                expect(res.status).toBe(400)
            })
        })
    })

    describe('DELETE to /users/:id', () => {

        it('should return http status code 204 when correct data is deleted',  () => {
            return supertest(server)
            .delete('/users/1')
            .then( res => {
                expect(res.status).toBe(204)
            })
        })

        it('should return http status code 404 when user with id can not be found ', () => {
            return supertest(server)
            .delete('/users/20')
            .then( res => {
                expect(res.status).toBe(404)
            })
        })
    })


})