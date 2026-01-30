import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components1/Home'
import Login from './Components1/Login'
import Productshowcase from './Components1/moreComp/Productshowcase'

function App() {

  return (
    <>
   <Routes>
   <Route path="/" element={<Home />}>
  <Route path="/:id" element={<Productshowcase />} />
</Route>
    <Route  path='/login' element={<Login/>}  />

   </Routes>

    </>
  )
}

export default App
