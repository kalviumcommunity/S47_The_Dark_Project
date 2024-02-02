import React, { useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Event() {
    const [data, setData] = React.useState([])

    useEffect(() => {
        axios
          .get('http://localhost:3000')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err))
          console.log(data)
    }, [])
  return (
    <>
    <div>
    <Link to='../'><button>Back to Home</button></Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data) =>{
                    return(
                        
                            <tr key={data.SERIAL}>
                                <td>{data.TIME}</td>
                                <td>{data.TASK}</td>
                                <td>{data.STATUS}</td>
                                <td>{data.DIFFICULTY}</td>
                            </tr>
                        
                    )
                } )}
            </tbody>
        </table>     
    </div>
    </>
  )
}

export default Event