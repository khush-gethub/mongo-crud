import React from 'react'
import Form from './components/form'
import Display from './components/Display'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<Display />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App