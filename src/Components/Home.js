import React from 'react'
import HomeCover from '../assets/HomeCover.png';
import Footer from './UniversalComponent/Footer';
import NavBar from './UniversalComponent/NavBar';
import MainCard from './HomeCard/MainCard';

export default function Home() {
  return (
    <div className='homeCover'>
      <NavBar />
        <div className='imgAlign'>
          <div className='imgContainer'>
            <img src = {HomeCover} alt=' Img Is Not Available' className='homepic' />
          </div>
          <p>Get groovy with Dine On! Menu mischief, spot snagging, and flavor explosions await. Let the tasty trip begin! 🍔🎉</p>
        </div>
        <div className='explore-btn'>
          <button className='btn-act'>Order</button>
          <button className='btn-nonact'>Reservation</button>
        </div>
        <div>
          <MainCard />
          <div>
            
          </div>
        </div>
        <Footer />
    </div>
  )
}
