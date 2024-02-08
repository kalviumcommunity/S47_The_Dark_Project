import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserForm() {

  const [data, setData] = useState([])
  const [status, setStatus] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('http://localhost:3000/')
        const jsonData = await response.json()
        setData(jsonData)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [status])

  const Navigate = useNavigate()
  const handleDelete = (data) => {
    axios.delete(`http://localhost:3000/usersdelete/${data._id}`)
    .then(res => {
      console.log(res);
      window.location.reload()
      setStatus(!status)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <div>
        <Link to='../'><button>Back to Home</button></Link>
        <Link to='/createuser'><button>Add User</button></Link>
    </div>
    <div>
      {
        data.map((data) => {
          return (
            <div className='flex'>
              <div key={data._id}>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.age}</p>
              <p>{data.gender}</p>
              </div>
              <button onClick={()=> Navigate(`/updateusers/${data._id}` , {state: {data}})}>Edit</button>
              <button onClick={(e) => handleDelete(data)}>Delete</button>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default UserForm