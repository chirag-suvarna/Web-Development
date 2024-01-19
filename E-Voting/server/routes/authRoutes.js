const express = require('express')
const router = express.Router()

const 
    {
        createUser,
        userLogin,
    } = require('../controllers/authController')

//Register User
router.post('/createuser',createUser)
router.post('/login',userLogin)

module.exports = router