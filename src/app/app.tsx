import React from 'react'
import { LogBox } from 'react-native'

import { SafeAreaProvider } from './providers'
import { HomeScreen } from '../screens'

const App: React.FC = () => {
  LogBox.ignoreAllLogs()

  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  )
}

export default App
