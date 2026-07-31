import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './components/SignUp'
import Album from './Pages/Album'


const App = () => {

  const [IsLogin, setIsLogin] = useState(false)

  return (
    <div>
      <Router>
        <Navbar IsLogin={IsLogin} setIsLogin={setIsLogin} />
        <Routes>

          <Route path='/' element={<Home IsLogin={IsLogin} />} />
          <Route path='/album' element={<Album />} />



          <Route path='/login' element={<Login IsLogin={IsLogin} setIsLogin={setIsLogin} />} />
          <Route path='/register' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App