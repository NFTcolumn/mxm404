import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Desktop } from './components/Desktop'
import { Comics } from './components/Comics'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/x" element={<Comics />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
