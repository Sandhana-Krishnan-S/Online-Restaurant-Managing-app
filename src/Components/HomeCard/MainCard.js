import React from 'react'
import MainCardImg from '../../assets/MainCard.png'

export default function MainCard() {
  return (
    <div className='m-card'>
        <div style={{padding : '20px'}}>
            <img src={MainCardImg} alt='' className='cover-img'></img>
        </div>
        <div>
            <h3>Stuffed Pork: Culinary Excellence on a Plate</h3>
            <p className='descriptionMain'>Dive into the world of epicurean ecstasy with our presentation on stuffed pork; it's a culinary rollercoaster! Bursting with zest and creativity Revel in the versatility of stuffed pork, a canvas for flavor fusion that dances on your taste buds. 🌮✨</p>
            <p className='right'> - The Best In The West</p>
        </div>
    </div>
  )
}
