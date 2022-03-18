import React from 'react'
import { SafeAreaView } from 'react-native'

const SafeAreaProvider: React.FC = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>
}

export default SafeAreaProvider
