import React, { useState } from 'react';
import data from '../data/todo.json';

function Datafilter() {
  const [filteredData, setFilteredData] = useState(data);
  const tasks = [...new Set(data.map(todo => todo.TASK))];

  const handleFilter = (event) => {
    const filterValue = event.target.value;
    if (filterValue === '') {
      setFilteredData(data);
    } else {
      const filteredData = data.filter((todo) => todo.TASK === filterValue);
      setFilteredData(filteredData);
    }
  };

  return (
    <>
      <div>
        <h1>Data filter</h1>
        <div className='filter'>
          <select onChange={handleFilter}>
            <option value="">Show All</option>
            {tasks.map(task => (
              <option key={task} value={task}>{task}</option>
            ))}
          </select>
        </div>

        <div className='datafilter'>
          {filteredData.map((todo) => (
            <div key={todo.SERIAL}>
              <p className='serial'>{todo.SERIAL}</p>
              <p className='task'>{todo.TASK}</p>
              <p className='status'>{todo.STATUS}</p>
              <p className='remarks'>{todo.REMARKS}</p>
              <p className='Difficulty'>{todo.DIFFICULTY}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Datafilter;
