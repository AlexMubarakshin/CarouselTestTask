import React, { useRef } from 'react'

import { Animated, PanResponder, StyleSheet } from 'react-native'

import { LocationEvent } from '../../models'
import { Card } from '../../shared/ui'
import { Device } from '../../shared/lib'

type Props = {
  events: LocationEvent[]
}

const CAROUSEL_INNER_PADDING = 16
const CARD_WIDTH = Device.screen.width - CAROUSEL_INNER_PADDING * 2
const CARD_HEIGHT = Device.screen.height - 220
const SWIPE_THRESHOLD = 0.25 * Device.screen.width
const SWIPE_DURATION = 250

enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
}

const Carousel = ({ events }: Props) => {
  const position = useRef(new Animated.Value(0)).current
  const value = useRef(0)

  React.useEffect(() => {
    position.addListener(_value => (value.current = _value.value))
  }, [])

  const forceSwipe = (direction: Direction) => {
    console.log('SWIPE', direction)

    // if (direction === Direction.LEFT) {
    //   forceReset()
    //
    //   return
    // }

    // if (direction === Direction.RIGHT) {
    //   Animated.timing(position, {
    //     toValue: CAROUSEL_INNER_PADDING,
    //     duration: 250,
    //     useNativeDriver: true,
    //   }).start()
    // }

    const nextIndex = direction === Direction.RIGHT ? -1 : 1

    const nextOffsetX = Device.screen.width * nextIndex + CAROUSEL_INNER_PADDING

    console.log({ position, nextOffsetX })

    Animated.spring(position, {
      toValue: nextOffsetX,
      useNativeDriver: false,
    }).start()
  }

  const forceReset = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start()
  }

  const _panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,

      // onPanResponderMove: Animated.event([null, { dx: position }]),
      onPanResponderGrant: (e, gesture) => {
        console.log('SET OFFSET', value.current)
        position.setOffset(value.current)
        position.setValue(0)
      },
      onPanResponderMove: Animated.event([null, { dx: position }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gesture) => {
        position.flattenOffset()
        // const isSwipeRight = gesture.dx < -SWIPE_THRESHOLD
        // const isSwipeLeft = gesture.dx > SWIPE_THRESHOLD
        //
        // if (isSwipeRight) {
        //   position.extractOffset()
        //
        //   forceSwipe(Direction.RIGHT)
        // }
        //
        // if (isSwipeLeft) {
        //   position.extractOffset()
        //
        //   forceSwipe(Direction.LEFT)
        // }
        //
        // if (!isSwipeLeft && !isSwipeRight) {
        //   // position.flattenOffset()
        //
        //   forceReset()
        // }
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
      {events.map((event, index) => (
        <Card
          key={event.id}
          title={event.title}
          imageUrl={event.imageUrl}
          style={[
            styles.card,
            {
              marginRight:
                index !== events.length - 1 ? CAROUSEL_INNER_PADDING : 0,
            },
          ]}
        />
      ))}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: CAROUSEL_INNER_PADDING,
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
})

export default Carousel
