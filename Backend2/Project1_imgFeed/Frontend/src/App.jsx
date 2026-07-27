import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/createPost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Feed />}></Route>
        <Route path='/Post' element={<CreatePost />}></Route>
      </Routes>
    </Router>

  )
}

export default App