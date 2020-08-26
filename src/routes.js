import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './screens/Main';
import Detail from './screens/Detail';

function Routes() {
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
          options={{ title: 'Github Jobs' }} 
          name="Main" 
          component={Main} 
        />

        <AppStack.Screen
          options={{ title: 'Descrição do Job' }}
          name="Detail" 
          component={Detail} 
        />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}

export default Routes;
