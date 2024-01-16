const express = require('express')
const router = express.Router()


// Get all voters
router.get('/',(req,res)=>{
    res.json({msg:'Get all voter'});
})

//Get single voter
router.get('/:id',(req,res)=>{
    res.json({msg:'Get single voter'});
})

//post a voter
router.post('/',(req,res)=>{
    res.json({msg:'Post a voter'});
})

//delete a voter
router.delete('/:id',(req,res)=>{
    res.json({msg:'delete a voter'});
})

//update a voter
router.patch('/:id',(req,res)=>{
    res.json({msg:'update a voter'});
})


module.exports = router