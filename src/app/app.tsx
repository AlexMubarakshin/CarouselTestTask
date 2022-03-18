import React from 'react'

import { SafeAreaProvider } from './providers'
import { HomeScreen } from '../screens'

const App: React.FC = () => {
  console.disableYellowBox = true
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  )
}

export default App
