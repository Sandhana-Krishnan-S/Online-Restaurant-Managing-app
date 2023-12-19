import React from 'react'

export default function SubCard({data}) {
  return (
    <div className='SubCard'>
      <h3>{data.Heading}</h3>
      <p className='gold'>{data.SubHeading}</p>
      <div>
        <img src={data.img} alt='' className='cardimg'/>
      </div>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </div>
  )
}
