import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/Telas/Principal';
import PontosTuristicos from './src/Telas/PontosTuristicos';
import Roteiro from './src/Telas/Roteiro';
import Preferencias from './src/Telas/Preferencias';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Curitiba Explorer',
            headerStyle: { backgroundColor: '#18392b' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="PontosTuristicos"
          component={PontosTuristicos}
          options={{
            title: 'Pontos Turísticos',
            headerStyle: { backgroundColor: '#0f5132' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Roteiro"
          component={Roteiro}
          options={{
            title: 'Roteiro do Dia',
            headerStyle: { backgroundColor: '#664d03' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Preferencias"
          component={Preferencias}
          options={{
            title: 'Preferências',
            headerStyle: { backgroundColor: '#084298' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
