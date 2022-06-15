import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter'
import Comment from './pages/Comment'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/comment" element={<Comment />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
