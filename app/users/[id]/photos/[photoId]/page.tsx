import React from 'react'

interface Props{
    params : {id :number, photoId : number;}
}

const PhotPage = ({params : {id , photoId}} : Props) => {
  return (
    <div>PhotPage User Id {id} & phot Id is {photoId}</div>
  )
}

export default PhotPage