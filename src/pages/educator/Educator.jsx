import React from 'react'
import { Outlet } from 'react-router-dom'


const Educator = () => {
  return (
    <div>
      <h1>educator</h1>
      <div>
        {<outlet/>}

      </div>
    </div>
  )
}

export default Educator
