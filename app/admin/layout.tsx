import React, { ReactNode } from 'react'

interface Props{
    children : ReactNode
}

const AdminLayout = ({children} : Props) => {
  return (
    <div className='flex'>
        <aside className=' bg-slate-400 p-2'>Sidebar Amdin</aside>
        <div> {children}</div>
    </div>
  )
}

export default AdminLayout