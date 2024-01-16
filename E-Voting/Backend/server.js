require('dotenv').config()
const express = require('express')
const votingRoutes = require('./Routes/voting')


//express app
const app = express()

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use(votingRoutes)


//listen for requests 
app.listen(process.env.PORT,()=>{
    console.log('listen on port',process.env.PORT)
})