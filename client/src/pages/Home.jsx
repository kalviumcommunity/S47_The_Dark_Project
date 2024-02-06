import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
function DummyHome() {
  return (
    <>
    <div className="content-container">
         
        <div className="flex personal-container">
            <div className="box todolist">
                <p>To-Do List here (Data Added)</p>
                <ul>
                    <li>"Task" Will do by 1</li>
                    <li>"Task" Will do by 2</li>
                    <li>"Task" Will do by 3</li>
                    <li>"Task" Will do by 4</li>
                </ul>
                
            </div>
            <div className="box upcoming-events">
                <p>Upcoming Events here</p>
                <ul>
                    <li>Scheduled event 1</li>
                    <li>Scheduled event 2</li>
                    <li>Scheduled event 3</li>
                    <li>Scheduled event 4</li>
                </ul>
                
            </div>
            <div className="box notes-container">
                <p>Notes Here</p>
                <div className="notes-in-nc">
                <div>Note 1</div>
                <div>Note 2</div>
                <div>Note 3</div>
                <div>Note 4</div>
                </div>
            </div>
            <div className="imp-links">
                <div><Link to="/todo"><button>View locally important json data</button></Link></div>
                <div><Link to="/event"><button>View data fetched from mongo db</button></Link></div>
                <div><Link to="/userform"><button>CRUD Operations performed here</button></Link></div>                
            </div>
        </div>
        <div className="flex online-container">
            <div className="box news-container">
                <p>News Here</p>
                <div className="news-in-nc">
                    <div>Important News 1</div>
                    <div>Important News 2</div>
                    <div>Important News 3</div>
                    <div>Important News 4</div>
                    <div>Important News 5</div>
                </div>
            </div>
            <div className="box videos-container">
                <p>Videos Here</p>
                <div className="videos-in-nc">
                    <div>Video 1</div>
                    <div>Video 2</div>
                    <div>Video 3</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DummyHome;
