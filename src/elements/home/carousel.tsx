import React, { useRef } from 'react'

import { Animated, PanResponder, StyleSheet } from 'react-native'

import { LocationEvent } from '../../models'
import { Card } from '../../shared/ui'
import { Device } from '../../shared/lib'

type Props = {
  events: LocationEvent[]
}

const CARD_WIDTH = Device.screen.width - 64
const CARD_HEIGHT = Device.screen.height - 220
const SWIPE_THRESHOLD = 0.25 * Device.screen.width
const SWIPE_DURATION = 250

enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
}

const Carousel = ({ events }: Props) => {
  const position = useRef(new Animated.Value(0)).current

  const forceSwipe = (direction: Direction) => {
    // TODO: Implement swipe on release
    // const x = direction === Direction.RIGHT ? CARD_WIDTH : -CARD_WIDTH
    //
    // Animated.timing(position, {
    //   toValue: x,
    //   duration: SWIPE_DURATION,
    //   useNativeDriver: true,
    // }).start()
  }

  const forceReset = () => {
    // TODO: Implement this
  }

  const _panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, { dx: position }]),
      onPanResponderRelease: (e, { dx }) => {
        const isSwipeLeft = dx < -SWIPE_THRESHOLD
        const isSwipeRight = dx > SWIPE_THRESHOLD

        if (isSwipeRight) {
          forceSwipe(Direction.RIGHT)
        }

        if (isSwipeLeft) {
          forceSwipe(Direction.LEFT)
        }

        if (!isSwipeLeft && !isSwipeRight) {
          forceReset()
        }
      },
    }),
  ).current

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: position }],
        },
      ]}
      {..._panResponder.panHandlers}
    >
      {events.map(event => (
        <Card
          key={event.id}
          title={event.title}
          imageUrl={event.imageUrl}
          style={styles.card}
        />
      ))}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
})

export default Carousel
