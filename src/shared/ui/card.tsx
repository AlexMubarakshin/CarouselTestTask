import React from 'react'
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'

type Props = {
  title: string

  style?: StyleProp<ViewStyle>
}

const Card = ({ title, style }: Props): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: 'red',
    width: Dimensions.get('window').width - 64,
    height: 320,
  },
})

export default Card
