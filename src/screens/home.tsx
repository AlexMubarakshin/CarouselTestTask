import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Carousel } from '../elements/home'
import { LocationEvent } from '../models'

const FAKE_EVENTS: LocationEvent[] = [
  {
    id: '00000',
    title: 'FAKE EVENT',
    imageUrl:
      'https://images.unsplash.com/photo-1647547718976-3a005bfb45c8?&fit=crop&w=640&q=80',
  },
  {
    id: '00001',
    title: 'FAKE EVENT No.2',
    imageUrl:
      'https://images.unsplash.com/photo-1647550856102-287f62e61651?fit=crop&w=640&q=80',
  },
  {
    id: '00002',
    title: 'FAKE EVENT No.3',
    imageUrl:
      'https://images.unsplash.com/photo-1646148707098-a27b818d5c95?fit=crop&w=640&q=80',
  },
  {
    id: '00003',
    title: 'FAKE EVENT No.4',
    imageUrl:
      'https://images.unsplash.com/photo-1647547718976-3a005bfb45c8?&fit=crop&w=640&q=80',
  },
]

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* ADD HEADER HERE */}

      <Carousel events={FAKE_EVENTS} />

      {/* ADD NAVIGATION HERE */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
  },
})

export default HomeScreen
