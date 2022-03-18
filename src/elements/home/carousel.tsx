import React from 'react'

import { View } from 'react-native'

import { LocationEvent } from '../../models'
import { Card } from '../../shared/ui'

type Props = {
  events: LocationEvent[]
}

const Carousel = ({ events }: Props) => {
  return (
    <View>
      {events.map(event => (
        <Card key={event.id} title={event.title} />
      ))}
    </View>
  )
}

export default Carousel
