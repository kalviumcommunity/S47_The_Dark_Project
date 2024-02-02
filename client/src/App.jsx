import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo/Todo'
import Event from './pages/Event/Event'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
