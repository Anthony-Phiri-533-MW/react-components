import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    
  return ( 
    <nav className="flex justify-between z-10">
        <p className='text-xl'>Logo</p>

        <ul className='flex'>
            <li className='pr-10 text-xl'>
                <Link href='#projects'>Projects</Link>
            </li>

            <li className='pr-10 text-xl'>
                <Link href='#about'>About</Link>
            </li>

            <li className='pr-10 text-xl'>
                <Link href='contact'>Contact</Link>
            </li>

            <li className='pr-1 text-xl'>
                <Link href='#blog'>Blog</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar