import React from 'react'
import HeroSection from "./subcomponents/HeroSection"
import Recipes from "./subcomponents/Recipes"

const Home = ({recipes}) => {
  return (
    <>
     <HeroSection/>
     <Recipes recipes={recipes}/>
    </>
  )
}

export default Home
