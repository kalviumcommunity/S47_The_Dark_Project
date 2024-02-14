import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo/Todo'
import Event from './pages/Event/Event'
import UserForm from './pages/form/UserForm'
import CreateUser from './pages/form/EditUser/CreateUser'
import UpdateUser from './pages/form/EditUser/UpdateUser'
import Datafilter from './pages/form/Datafilter'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/event" element={<Event />} />

          <Route path="/userform" element={<UserForm />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/updateusers/:id" element={<UpdateUser />} />

          <Route path="/datafilter" element={<Datafilter />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
