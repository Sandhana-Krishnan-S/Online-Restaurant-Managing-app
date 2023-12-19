import React from 'react'
import HomeCover from '../assets/HomeCover.png';
import Footer from './UniversalComponent/Footer';
import NavBar from './UniversalComponent/NavBar';
import MainCard from './HomeCard/MainCard';
import SubCard from './HomeCard/SubCard';
import SubCard1 from '../assets/SubCard1.png';
import SubCard2 from '../assets/SubCard2.png';

export default function Home() {
  const Card1 =  {
    Heading : 'Pasta makes everything marinara-velous!' ,
    SubHeading : 'Top Seller' ,
    img : SubCard1 ,
    title : 'Spaghetti',
    description : 'Spaghetti, the edible confetti of joy! Those noodle strands are like funky acrobats, flipping and diving in a saucy circus. It`s a flavor disco, where each bite is a mini dance party in your mouth.'
  }
  const Card2 =  {
    Heading : 'Grilled beef steak with french fries' ,
    SubHeading : 'Premium Quality' ,
    img : SubCard2 ,
    title : 'Grilled beef',
    description : 'Enter the realm of grilled beef, where the sizzle is the sound of flavor fireworks. Picture succulent beef, kissed by the flames, creating a symphony of smoky goodness. The grill marks are like edible tattoos'
  }
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
          <div className='cardAlign'>
            <div className='subCardHolder'>
              <SubCard data={Card1} />
            </div>
            <div className='subCardHolder'>
              <SubCard data={Card2} />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}
