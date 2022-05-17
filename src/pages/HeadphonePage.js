import React,{useEffect} from 'react'
import Headphones from '../components/Category/Headphones/Headphones'
import Gear from '../components/Homey/Gear/Gear'
import Footer from '../components/shared/Footer/Footer'
import SharedHero from '../components/shared/Hero/SharedHero'
import Shop from '../components/shared/Shop/Shop'
import {HomeControl} from './homestyling'

const HeadphonePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div data-testid='headphones'>
        <SharedHero title={"Headphones"} />
        <HomeControl>
          <Headphones />
          <Shop />
          <Gear />
        </HomeControl>
        <Footer />
    </div>
  )
}

export default HeadphonePage;




