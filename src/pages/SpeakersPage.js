import React from 'react'
import SpeakerBody from '../components/Category/Speakers/SpeakerBody'
import Gear from '../components/Homey/Gear/Gear'
import Footer from '../components/shared/Footer/Footer'
import SharedHero from '../components/shared/Hero/SharedHero'
import Shop from '../components/shared/Shop/Shop'
import {HomeControl} from './homestyling'

const SpeakersPage = () => {
  return (
    <div>
        <SharedHero title={"Speakers"} />
        <HomeControl>
          <SpeakerBody/>
          <Shop />
          <Gear />
        </HomeControl>
        <Footer />
    </div>
  )
}

export default SpeakersPage