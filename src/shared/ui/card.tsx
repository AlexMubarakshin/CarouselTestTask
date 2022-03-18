import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  title: string
}

const Card = ({ title }: Props): JSX.Element => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default Card
