const express = require('express')
const router = express.Router()
const
    {
        getElections,
        getElection,
        createElection,
        deleteElection,
        updateElection,
    }= require('../controllers/electionController')

// Get all voters
router.get('/',getElections)

//Get single voter
router.get('/:id',getElection)

//post a voter
router.post('/',createElection)

//delete a voter
router.delete('/:id',deleteElection)

//update a voter
router.patch('/:id',updateElection)


module.exports = router