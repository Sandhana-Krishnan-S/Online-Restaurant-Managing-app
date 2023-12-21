import React from 'react'
import NavBar from './UniversalComponent/NavBar'
import RestorentCards from './ShopComponents/RestorentCards'
import Footer from './UniversalComponent/Footer'

export default function Shop() {
  return (
    <div>
      <NavBar />
      <RestorentCards />
      <Footer />
    </div>
  )
}
