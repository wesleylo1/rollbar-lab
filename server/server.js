require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

const path = require('path')


app.get(express.json())
app.get(cors())
app.use(express.static('public'))

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, ()=> console.log(`Server is running on port ${port}`))