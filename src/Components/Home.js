import React, { useContext } from 'react'
import HomeCover from '../assets/HomeCover.png';
import Footer from './UniversalComponent/Footer';
import NavBar from './UniversalComponent/NavBar';
import MainCard from './HomeCard/MainCard';
import SubCard from './HomeCard/SubCard';
import SubCard1 from '../assets/SubCard1.png';
import SubCard2 from '../assets/SubCard2.png';
import { NavLink } from 'react-router-dom';
import { Context } from './UserContext';
import '../Styles/HomeCard.css';
import '../Styles/Home.css';

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

  //context 

  const {UserName} = useContext(Context);

  return (
    <div className='homeCover'>
      <NavBar />
        <div className='imgAlign'>
          <div className='imgContainer'>
            <img src = {HomeCover} alt=' Img Is Not Available' className='homepic' />
          </div>
          <p>Hey <span style={{fontWeight : '800'}}>{UserName ? UserName : 'Guest'}</span>, welcome to Dine-On! Your gateway to the best and verified local restaurants. Discover culinary delights and create unforgettable dining experiences with us. 🍔🎉</p>
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
        <div className='AboutInHome'>
          <h2>Learn More About Us</h2> 
          <p>
Welcome to Dine-On, your go-to destination for discovering the finest and verified restaurants in and around your local area. At Dine-On, we understand that finding the perfect dining experience is not just about satisfying your hunger—it's about creating memorable moments. That's why we've curated a diverse selection of the best restaurants that have been thoroughly vetted to ensure top-notch quality and service.</p>
          <button className='HomeAbt-btn'>
            <NavLink><p className='btn-link'>About Us</p></NavLink>
          </button>
        </div>
        <Footer />
    </div>
  )
}
