import React from 'react'
import HomeCover from '../assets/HomeCover.png';

export default function Home() {
  return (
    <div className='homeCover'>
        <div className='imgContainer'>
          <img src = {HomeCover} alt=' Img Is Not Available' />
        </div>
    </div>
  )
}
