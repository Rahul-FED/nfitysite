import React from 'react'
import Sidebar from './atoms/sidebar/sidebar'
import Token from './components/tokenaddress/Token'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pair from './components/Pairaddress/Pair'

const App = () => {
  return (
  <>
      <BrowserRouter>
<div style={{display:'flex'}}>
<Sidebar />
        <Routes>
          <Route path='/' element={<Token/>}/>
          <Route path='/pair' element={<Pair/>}/>
        </Routes>
    </div>
      <Footer/>
      </BrowserRouter>
  </>
  )
}

export default App

// *---------------------------------------------------------*
// Following the standard structure 
// seperate file for All Text(commonConstants)
// seperate file for colors(change color from the one file)
// using styled components all styling done by manually
// search filter of Token Search Results is working
// *---------------------------------------------------------*