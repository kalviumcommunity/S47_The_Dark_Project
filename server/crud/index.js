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

        //Create operation below
        app.post('/users', (req, res) => {
            let { name, email, gender, age } = req.body;
            age = parseInt(age,10)
            console.log(req.body)
            UserModel.create({ name, email, gender, age })
            .then(userdata => res.json(userdata))
            .catch(err => console.log(err))
        })

        //Update and delete operations below
        // app.put('/users/:id', (req, res) => {
        //     let { name, email, gender, age } = req.body;
        //     age = parseInt(age,10)
        //     console.log(req.body)
        //     UserModel.findByIdAndUpdate(req.params.id, { name, email, gender, age })
        //     .then(userdata => res.json(userdata))
        //     .catch(err => console.log(err))
        // })

        // app.put('/updateusers/:_id', async (req, res) => {
        //     try {
        //       const { _id } = req.params;
        //       const updatedUser = req.body; // Assuming the updated user data is sent in the request body
        //       const user = await User.findByIdAndUpdate(_id, updatedUser, { new: true });
        //       res.json(user);
        //     } catch (error) {
        //       res.status(500).json({ message: error.message });
        //     }
        // });

        app.put('/updateusers/:_id', (req, res) => {
            const id = req.params._id;
            UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age, gender: req.body.gender})
            .then(res => res.json(res))
            .catch(err => console.log(err))
        })

        // app.delete('/usersdelete/:id', (req, res) => {
        //     UserModel.findByIdAndDelete({ _id: id })
        //     .then(res => res.json(res))
        //     .catch(err => console.log(err))
        //     // .then(userdata => res.json(userdata))
        //     // .catch(err => console.log(err))
        // })

        app.delete('/usersdelete/:id', (req, res) => {
            const id = req.params.id;
            UserModel.findByIdAndDelete(id)
            .then(res => res.json(res))
            .catch(err => console.log(err))
        })
    })
    .catch(err => console.log(('Error connecting to mongodb',err)
));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

