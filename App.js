import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './src/routes'

function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Routes />
    </>
  )
}

export default App
