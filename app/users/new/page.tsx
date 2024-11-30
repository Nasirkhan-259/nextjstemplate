
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const CreateUser = () => {
    const router =  useRouter()
  return (
    <div>
        <div>CreateUser Form</div>
        <button className='btn btn-success' onClick={() => { router.push('/users') }}>Create User</button>
    </div>
  )
}

export default CreateUser