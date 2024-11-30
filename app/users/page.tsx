import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
    params : {sortOrder : string }
}

const UsersPage = async ({params :{sortOrder}} : Props) => {
    console.log(sortOrder)
  return (

    <>
        <div>User List</div>
        <Link href='/users/new' className='btn btn-primary'>Add New</Link>
        <div>
            <UserTable sortOrder={sortOrder}/>
        </div>
    </>
  )
}

export default UsersPage