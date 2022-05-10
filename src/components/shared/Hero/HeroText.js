import React from 'react'
import { Button } from '../../Buttons/Button'
import { Header, HeroTextControl, NewProductText, SubHeading } from './Herostyling'

const HeroText = () => {
  return (
    <HeroTextControl data-testid='hero'>
        <NewProductText>NEW PRODUCT</NewProductText>
        <Header data-testid='heroheader'>XX99 MARK II HEADPHONES</Header>
        <SubHeading data-testid='subheader'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</SubHeading>
        <Button label={'SEE PRODUCT'} link='/xx99-mark-two' />
    </HeroTextControl>
  )
}

export default HeroText

