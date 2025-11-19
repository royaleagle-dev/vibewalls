//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import './GlobalStyles.css'
//import HeaderComponent from './components/HeaderComponent'
//import FooterComponent from './components/FooterComponent'
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  
  )
}

export default App
