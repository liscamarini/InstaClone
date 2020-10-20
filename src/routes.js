import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from './Pages/Feed';

import LogoImg from './assets/instagram.png';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: <Image source={LogoImg} />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
