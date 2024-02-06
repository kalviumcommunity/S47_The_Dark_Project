const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const UserModel = require('./model');
const port = 3000;

require('dotenv').config();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        app.get('/', (req, res) => {
            UserModel.find({})
            .then(users => {
                res.json(users)
            })
        })
        app.post('/users', (req, res) => {
            let { name, email, gender, age } = req.body;
            age = parseInt(age,10)
            console.log(req.body)
            UserModel.create({ name, email, gender, age })
            .then(userdata => res.json(userdata))
            .catch(err => console.log(err))
        })
    })
    .catch(err => console.log(('Error connecting to mongodb',err)
));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

