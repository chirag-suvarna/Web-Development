const Election = require('../models/electionModel')
const mongoose = require('mongoose')

//get all Election
const getElections = async(req,res)=>{
    const elections = await Election.find({})
    res.status(200).json(elections)
}

//get single Election
const getElection = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such Election'})
    }

    const election = await Election.findById(id)
    if(!election){
        return res.status(404).json({error: 'No such Election'})
    }

    res.status(200).json(election)

}

//create a Election
const createElection = async(req,res)=>{
    const{election_name,election_start_date,election_end_date}=req.body
    
    //add to db
    try{
        const election = await Election.create({election_name,election_start_date,election_end_date})
        res.status(200).json(election)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a Election
const deleteElection = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such Election'})
    }

    const election = await Election.findOneAndDelete({_id:id})
    if(!election){
        return res.status(404).json({error: 'No such Election'})
    }

    res.status(200).json(election)

}
//update a Election
const updateElection = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such Election'})
    }

    const election = await Election.findOneAndUpdate({_id:id}, {
    ...req.body
    })
    if(!election){
        return res.status(404).json({error: 'No such Election'})
    }
    res.status(200).json(election)

}

module.exports = {
    createElection,
    getElection,
    getElections,
    deleteElection,
    updateElection,
}