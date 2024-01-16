const express = require('express')
const router = express.Router()
const
    {
        getUsers,
        getUser,
        createUser,
        deleteUser,
        updateUser,
    }= require('../controllers/userController')

// Get all voters
router.get('/',getUsers)

//Get single voter
router.get('/:id',getUser)

//post a voter
router.post('/',createUser)

//delete a voter
router.delete('/:id',deleteUser)

//update a voter
router.patch('/:id',updateUser)


module.exports = router