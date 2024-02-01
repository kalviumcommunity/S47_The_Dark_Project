import React from 'react'
import './Todo.css'
import data from '../data/todo.json'
import { Link } from 'react-router-dom'


function Todo() {
  return (
    <>
    <Link to='../'><button>Back to Home</button></Link>
    <div className='todo'>
    <table>
        <thead>
        <tr>
            <th>S.no.</th>
            <th>Task</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Difficulty</th>
        </tr>
        </thead>
        <tbody>
        {data.map((todo) => (
            <tr key={todo.SERIAL}>
            <td className='serial'>{todo.SERIAL}</td>
            <td className='task'>{todo.TASK}</td>
            <td className='status'>{todo.STATUS}</td>
            <td className='remarks'>{todo.REMARKS}</td>
            <td className='Difficulty'>{todo.DIFFICULTY}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>

    </>
  )
}

export default Todo;