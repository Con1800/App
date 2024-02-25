import './App.css'
import Home from './pages/Home'
import Ml from './pages/Ml'
import Science from './pages/Science'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
     <Router>
      <Routes>
       <Route element={<Navbar />} >
        <Route path="/" element={<Home />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/science" element={<Science />} />
       </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
