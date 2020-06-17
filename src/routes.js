import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Job from './screens/Job'
import Detail from './screens/Detail'

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2B7FC3'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          cardStyle: {
            backgroundColor: '#F0F0F5'
          }
        }} 
      >
        <AppStack.Screen
          options={{
            title: 'Github Jobs'
          }} 
          name="Job" 
          component={Job} 
        />

        <AppStack.Screen
          options={{
            title: 'Descrição do Job'
          }} 
          name="Detail" 
          component={Detail} 
        />
      </AppStack.Navigator>

    </NavigationContainer>
  )
}
