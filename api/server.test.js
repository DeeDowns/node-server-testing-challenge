const supertest = require('supertest')

const server = require('./server')
const db = require('../data/db-connection')

describe('server', () => {
   describe('GET to /', () => {
       it('should return http status code 200', async () => {
           const res = await supertest(server).get('/')

           expect(res.status).toBe(200)
       })

       it('should return an api property with value up', async () => {
        const res = await supertest(server).get('/')

        expect(res.body.api).toBe('up')
    })
   })
   
})