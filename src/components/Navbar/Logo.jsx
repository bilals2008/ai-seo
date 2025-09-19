// File: src/components/Navbar/Logo.jsx
import React from 'react'
import logo from '@/assets/images/Logo.png'
function Logo() {
  return (
    <div>
        <img src={logo} className='w-10 h-10'/>
    </div>
  )
}

export default Logo