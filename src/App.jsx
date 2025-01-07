// Import module
import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Import components & components
import Navbar from './components/Navbar'

import Home from './views/Home'
import BackOffice from './views/BackOffice'
import Login from './views/Login/Login' 
import Register from './views/Register/Register'


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
              path="/BackOffice"
              element={<BackOffice />}
            />
            <Route
              path="/Login"
              element={<Login />} 
            />
            <Route
              path="/Register"
              element={<Register />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
