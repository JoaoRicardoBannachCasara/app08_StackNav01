import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import Carnaval from './src/Telas/Carnaval';
import FestaJunina from './src/Telas/FestaJunina';
import Halloween from './src/Telas/Halloween';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Bem Vindo(a)',
            headerStyle: { backgroundColor: '#111' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Carnaval"
          component={Carnaval}
          options={{
            title: 'Carnaval',
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen
          name="FestaJunina"
          component={FestaJunina}
          options={{
            title: 'Festa Junina',
            headerStyle: { backgroundColor: '#f6b93b' },
            headerTintColor: '#000',
          }}
        />
        <Stack.Screen
          name="Halloween"
          component={Halloween}
          options={{
            title: 'Halloween',
            headerStyle: { backgroundColor: '#2d3436' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
