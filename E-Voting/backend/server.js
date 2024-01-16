require('dotenv').config()
const express = require('express')
const votingRoutes = require('./routes/voting')
const mongoose = require('mongoose')


//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/voting',votingRoutes)

//connect db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listen for requests 
app.listen(process.env.PORT,()=>{
    console.log('listen on port',process.env.PORT)
})

})
.catch((error)=>{
    console.log(error)
})

