// File: src/components/Navbar/Navbar.jsx
import React from 'react'
import Logo from './Logo'
import NavElements from './NavElements'
import NavBtton from './NavBtton'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-2'
    >
        <Logo/>
        <NavElements/>
        <NavBtton/>
    </div>
  )
}

export default Navbar