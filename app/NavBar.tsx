import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-slate-200'>
        <Link href="/" className='p-2'>Next.js</Link>
        <Link href="/users" className='p-2'>Users</Link>
    </div>
  )
}

export default NavBar