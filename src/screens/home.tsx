import React from 'react'
import { View } from 'react-native'

import { Carousel } from '../elements/home'
import { LocationEvent } from '../models'

const FAKE_EVENTS: LocationEvent[] = [
  { id: '00000', title: 'FAKE EVENT' },
  { id: '00001', title: 'FAKE EVENT No.2' },
  { id: '00002', title: 'FAKE EVENT No.3' },
  { id: '00003', title: 'FAKE EVENT No.4' },
]

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
