const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const UserModel = require('./model');
const port = 3000;
const joi = require('joi')
const errorHandler = require('./middleware/errorHandler')



require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(errorHandler);



const updateSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    gender: joi.string().required(),
    age: joi.number().required()
})



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

        app.put('/updateusers/:_id', (req, res) => {
            const {error,value} = updateSchema.validate(req.body)
            if(error){
                console.log(error.details)
            }else{
                const id = req.params._id;
                UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age, gender: req.body.gender})
                .then(res => res.json(res))
                .catch(err => console.log(err))    
            }
        })

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

