// File: src/components/Navbar/Logo.jsx
import React from 'react'
import logo from '@/assets/images/Logo.png'
function Logo() {
  return (
    <div>
        <img src={logo} className='size-8 md:size-10'/>
    </div>
  )
}

export default Logo