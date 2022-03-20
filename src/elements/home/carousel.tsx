import React from 'react'

import { Animated, View, PanResponder, StyleSheet } from 'react-native'

import { LocationEvent } from '../../models'
import { Card } from '../../shared/ui'
import { Device } from '../../shared/lib'

type Props = {
  events: LocationEvent[]
}

const CAROUSEL_INNER_PADDING = 0
const CARD_WIDTH = Device.screen.width // - CAROUSEL_INNER_PADDING * 2
const CARD_HEIGHT = Device.screen.height - 220

const Carousel = ({ events }: Props) => {
  const currentIndex = React.useRef(0)
  const position = React.useRef(new Animated.Value(0)).current
  const value = React.useRef(0)

  const maxWidth = React.useMemo(() => {
    return Device.screen.width * events.length
  }, [events.length])

  const _panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,

      onPanResponderGrant: () => {
        value.current = (position as any)._value
      },
      onPanResponderMove: (e, { dx }) => {
        const toValue = value.current + dx

        const isLeftBound = -toValue > maxWidth
        if (isLeftBound) {
          position.setValue(0)
        } else {
          position.setValue(toValue)
        }
      },
      onPanResponderRelease: (e, { vx }) => {
        const _index = Math.max(
          0,
          Math.min(
            events.length - 1,
            (currentIndex.current + 1) * -Math.sign(vx),
          ),
        )
        currentIndex.current = _index

        Animated.spring(position, {
          toValue: _index * -Device.screen.width,
          useNativeDriver: false,
        }).start()
      },
    }),
  ).current

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CAROUSEL_INNER_PADDING,
  },
  animatedContainer: {
    flexDirection: 'row',
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
})

export default Carousel
