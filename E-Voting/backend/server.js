require('dotenv').config()
const express = require('express')
const electionRoutes = require('./routes/electionRoutes')
const userRoutes = require('./routes/userRoutes')
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
app.use('/api/user',userRoutes)
app.use('/api/election',electionRoutes)

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

