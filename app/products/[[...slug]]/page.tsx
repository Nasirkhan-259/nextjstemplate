import React from 'react'

interface Props{
    params : { slug : string[]}
}
const page = ({params : { slug }} : Props) => {
  return (
    <div>This is Slug with dynamic slugs here : {slug}</div>
  )
}

export default page