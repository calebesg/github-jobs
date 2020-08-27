import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import JobsList from './screens/JobsList';
import Favorites from './screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ headerShown: false }} 
        tabBarOptions={{
          style: {
            elevation: 0,
            shadownOpacity: 0,
            height: 64
          },
  
          tabStyle: {
            height: 64,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          },
  
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20
          },
  
          labelStyle: {
            fontFamily: 'Archivo_700Bold',
            fontSize: 13,
            marginLeft: 16
          },
  
          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: '#ebebf5',
          inactiveTintColor: '#c1bccc',
          activeTintColor: '#32264d'
        }}
      >
        <Screen 
          name="Jobs" 
          component={JobsList}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Feather 
                  name="home" 
                  color={focused ? '#8257E5' : color} 
                  size={size} 
                />
              );
            }
          }}
        />
        <Screen 
          name="Favorites" 
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Feather 
                  name="heart" 
                  color={focused ? '#8257E5' : color} 
                  size={size} 
                />
              );
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
