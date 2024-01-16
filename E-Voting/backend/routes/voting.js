const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// Get all voters
router.get('/',(req,res)=>{
    res.json({msg:'Get all voter'});
})

//Get single voter
router.get('/:id',(req,res)=>{
    res.json({msg:'Get single voter'});
})

//post a voter
router.post('/',async(req,res)=>{
    const{first_name,last_name,contact_no,email_id,password,date_of_birth,is_verfied,is_admin}=req.body
    try{
        const user = await User.create({first_name,last_name,contact_no,email_id,password,date_of_birth,is_verfied,is_admin})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
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