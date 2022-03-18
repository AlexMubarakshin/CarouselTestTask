import React from 'react'
import { View } from 'react-native'

import { Carousel } from '../elements/home'
import { LocationEvent } from '../models'

const FAKE_EVENTS: LocationEvent[] = [{ id: '00000', title: 'FAKE EVENT' }]

const HomeScreen: React.FC = () => {
  return (
    <View>
      {/* ADD HEADER HERE */}

      <Carousel events={FAKE_EVENTS} />

      {/* ADD NAVIGATION HERE */}
    </View>
  )
}

export default HomeScreen
