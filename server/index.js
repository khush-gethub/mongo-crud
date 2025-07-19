const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/userModel')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/mongo-crud')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err))

app.post('/users', async (req, res) => {
    try {
        const { uname, email, password } = req.body;
        const newUser = await User.create({ uname, email, password })
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
    }
})

app.get('/users', (req, res) => {
    User.find()
        .then(use => res.json(use))
        .catch(err => console.log("err", err))
})

app.listen(4000);