import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo/Todo'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
