require('dotenv').config()

let { SERVER_PORT,ROLLBAR_TOKEN } = process.env

const express = require('express')
const cors = require('cors')

const app = express()

const path = require('path')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


app.get(express.json())
app.get(cors())
app.use(express.static(path.join(__dirname, '../client/'))) // follow up with this

app.get('/',(req,res) =>{
    rollbar.log('accessed')
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


const port = process.env.PORT || SERVER_PORT

app.listen(port, ()=> console.log(`Server is running on port ${port}`))