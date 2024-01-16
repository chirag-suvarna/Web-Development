const User = require('../models/userModel')
const mongoose = require('mongoose')

//get all user
const getUsers = async(req,res)=>{
    const users = await User.find({})
    res.status(200).json(users)
}

//get single user
const getUser = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such user'})
    }

    const user = await User.findById(id)
    if(!user){
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)

}

//create a user
const createUser = async(req,res)=>{
    const{first_name,last_name,contact_no,email_id,password,date_of_birth,is_verfied,is_admin}=req.body
    
    //add to db
    try{
        const user = await User.create({first_name,last_name,contact_no,email_id,password,date_of_birth,is_verfied,is_admin})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a user
const deleteUser = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such user'})
    }

    const user = await User.findOneAndDelete({_id:id})
    if(!user){
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(user)

}
//update a user
const updateUser = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such user'})
    }

    const user = await User.findOneAndUpdate({_id:id}, {
    ...req.body
    })
    if(!user){
        return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(user)

}

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
}