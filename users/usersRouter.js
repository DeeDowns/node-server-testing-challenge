const express = require('express')

const Users = require('./usersModel')
const { del } = require('../data/db-connection')

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
    const newUser = req.body

    if(newUser.name) {
        Users.add(newUser)
        .then(user => {
            console.log(user)
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err.message })
        })
    } else {
        res.status(400).json({ message: 'need name'})  
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Users.remove(id) 
    .then(deleted => {
        console.log(deleted)
        if(deleted > 0) {
            res.status(204).json({ message: 'user removed'})
        } else {
            res.status(404).json({ message: 'user not found'})
        }
       
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
    })
})




module.exports = router