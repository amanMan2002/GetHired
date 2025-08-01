
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Authentication/Register'
import HomePage from './Theme/homePage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
