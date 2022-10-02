const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./Router')
const cors = require('cors')

const PORT = 4000

const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRouter)


const startServer = async () => {
    try {
        await mongoose.connect('mongodb+srv://d_carzanov:RJX-sZj-psQ-56H@clusterauth.1sosrch.mongodb.net/auth_rolesretryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`listening to ${PORT} port`))
    } catch (error) {
        console.log(error)
    }
}

startServer()