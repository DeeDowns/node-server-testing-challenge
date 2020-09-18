const express = require('express')

const Users = require('./usersModel')

const router = express.Router()

router.get('/', (req, res) => {
    Users.getAll()
    .then(users => {
        console.log(users)
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})




module.exports = router