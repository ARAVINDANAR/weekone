import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './landing'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
