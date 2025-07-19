const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/userModel')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/mongo-crud')

app.post('/users', async (req,res) => {
    const { uname, email, password} = req.body;
    const newUser = await User.create({uname, email, password})
    res.status(201).json(newUser);
})

app.listen(4000);