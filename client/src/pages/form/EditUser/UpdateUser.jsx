import { useNavigate, useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();


  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState('')
  const [gender,setGender] = useState('')
  const location = useLocation();
  const data = location.state.data;
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3000/updateusers/${id}`,{name,email,age,gender});
  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserData();
  // }, [id]);
  
  useEffect(() => {
    setName(data.name);
    setEmail(data.email);
    setAge(data.age);
    setGender(data.gender);
  },[ data])

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.put(`http://localhost:3000/updateusers/${id}`)
  // };

  const Update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/updateusers/'+ data._id, { name, email, age, gender })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  }

  return (
    <div>
      <h2>Update User</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChangeName}  />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={age} onChange={handleChangeAge} />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={gender} onChange={handleChangeGender} >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type="submit" onClick={Update}>Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;