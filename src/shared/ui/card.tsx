import React from 'react'
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native'

type Props = {
  title: string
  imageUrl: string

  style?: StyleProp<ViewStyle>
}

const Card = ({ title, imageUrl, style }: Props): JSX.Element => {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={[styles.container, style]}
    >
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#e9e9e9',
    padding: 16,
    width: 320,
    height: 320,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
  },
})

export default Card
