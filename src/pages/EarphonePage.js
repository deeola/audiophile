import React from 'react'
import EarphoneBody from '../components/Category/Earphone/EarphoneBody'
import Gear from '../components/Homey/Gear/Gear'
import Footer from '../components/shared/Footer/Footer'
import SharedHero from '../components/shared/Hero/SharedHero'
import Shop from '../components/shared/Shop/Shop'
import {HomeControl} from './homestyling'

const EarphonePage = () => {
  return (
    <div>
    <SharedHero title={"Earphones"} />
    <HomeControl>
      <EarphoneBody />
      <Shop />
      <Gear />
    </HomeControl>
    <Footer />
</div>
  )
}

export default EarphonePage