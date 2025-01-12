// Import module
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Import components & components
import Navbar from './components/Navbar'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Games from './views/Games'

function App() {

  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/games/:id"
              element={<Games />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
