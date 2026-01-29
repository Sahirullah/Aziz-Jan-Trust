import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Programs from './pages/Programs'
import SuccessStory from './pages/SuccessStory'
import Presence from './pages/Presence'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/success-story" element={<SuccessStory />} />
            <Route path="/presence" element={<Presence />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
