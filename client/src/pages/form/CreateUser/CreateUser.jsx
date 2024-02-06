import React, { useState } from 'react'
import axios from 'axios'
function CreateUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/users', {name, email, age, gender})
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add User Details</h2>
            <div className="name">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
            <div className="email">
                <label>email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            </div>
            <div className="name">
                <label>age</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age" />
            </div>
            <div className="name">
                <label>gender</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="gender" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
    )
}

export default CreateUser;