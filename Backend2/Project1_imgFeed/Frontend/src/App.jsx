import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import CreatePost from './pages/createPost'
import Feed from './pages/Feed'
import Navbar from './component/Navbar'
import Admin from './pages/admin'
import { useState } from 'react'

const App = () => {
  const [posts, setPosts] = useState([]);

  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed posts={posts} setPosts={setPosts} />}></Route>
        <Route path='/create_post' element={<CreatePost />}></Route>
        <Route path='/admin' element={<Admin posts={posts} setPosts={setPosts} />}></Route>
      </Routes>
    </Router>

  )
}

export default App