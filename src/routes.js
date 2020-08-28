import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import JobsList from './pages/JobsList';
import Favorites from './pages/Favorites';

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
            height: 64,
          },
  
          tabStyle: {
            marginTop: -1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
  
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
  
          labelStyle: {
            fontFamily: 'Archivo_700Bold',
            fontSize: 13,
            marginLeft: 16,
          },
  
          inactiveBackgroundColor: '#17181C',
          activeBackgroundColor: '#17181C',
          inactiveTintColor: '#686870',
          activeTintColor: '#0C6CDE',
          
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
                  color={focused ? '#0C6CDE' : color} 
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
                  color={focused ? '#0C6CDE' : color} 
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
