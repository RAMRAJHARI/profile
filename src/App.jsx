import { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import Herosection from './components/HeroSection/Herosection'
import PoemCard from './components/PoemCard/PoemCard'
import Footer from './components/FooterSection/Footer'


function App() {

  return (
    <>
      <Navbar name='Ramraj R J'/>
      <Herosection name='Ramraj R.J'/>
      <PoemCard/>
      <Footer/>
    </>
  )
}

export default App
