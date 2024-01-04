import React from 'react'
import NavBar from './UniversalComponent/NavBar'
// import RestorentCards from './ShopComponents/RestorentCards'
import Footer from './UniversalComponent/Footer'
import ToogleMode from './ShopComponents/ToogleMode'

export default function Shop() {
  return (
    <div>
      <NavBar />
      <ToogleMode />
      <Footer />
    </div>
  )
}
