import React from 'react'
import {Rate} from 'antd'

export default function Ratings({rating}) {
    const stars = rating;
  return ( 
    <div>
        <Rate defaultValue={stars} allowHalf autoFocus = {true} disabled = {true} />
    </div>
  )
}


//e4e5e9