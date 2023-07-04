import React from 'react'
import IncDec from '../Pages/IncDec'
import ArrayList from '../Pages/ArrayList'
import { Route, Routes } from 'react-router-dom'

function Content() {
  return (
    <div className='p-4 bg-light'>
      <Routes>
        <Route path="/array" element={<ArrayList />} />
        <Route path="/incdec" element={<IncDec />} />
      </Routes>
    </div>
  )
}

export default Content
