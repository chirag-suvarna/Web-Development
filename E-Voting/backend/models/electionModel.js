const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const electionSchema = new Schema({
    election_name:{
        type: String,
        required: true,
    },
    election_start_date:{
        type: Date,
        default: Date.now, 
    },
    election_end_date:{
        type: Date,
        default: Date.now, 
    }

},{timestamps:true})

module.exports = mongoose.model('Election',electionSchema) 
