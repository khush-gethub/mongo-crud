const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/userModel')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/mongo-crud')

app.post('/users', async (req, res) => {
    const { uname, email, password } = req.body;
    const newUser = await User.create({ uname, email, password });
    res.status(201).json(newUser);
})

app.get('/users', (req, res) => {
    User.find()
        .then(use => res.json(use))
        .catch(err => console.log("err", err))
})

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deleteData = await User.findByIdAndDelete(id);
    res.json(deleteData);
})

app.listen(4000);