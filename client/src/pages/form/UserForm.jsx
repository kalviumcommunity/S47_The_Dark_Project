import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserForm() {

  const [data, setData] = useState([])

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
  }, [])

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
            <div className='flex' key={data.id}>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.age}</p>
              <p>{data.gender}</p>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default UserForm