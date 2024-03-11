"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
  return ( 
    <nav className="flex justify-between z-10">
        <p className='text-xl'>DataIntMw</p>

        <ul className='flex'>
            <li className='pr-10 text-xl'>
                <Link href='#'>Projects</Link>
            </li>

            <li className='pr-10 text-xl'>
                <Link href='#'>About</Link>
            </li>

            <li className='pr-10 text-xl'>
                <Link href='#'>Contact</Link>
            </li>

            <li className='pr-1 text-xl'>
                <Link href='#'>Blog</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar