import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Contato from './screens/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#1f4f8b" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: '#1f4f8b',
          },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#1f4f8b',
          tabBarInactiveTintColor: '#666',
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: {
            height: 70,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';

            if (route.name === 'Portfólio') {
              iconName = 'work';
            }

            if (route.name === 'Contato') {
              iconName = 'contact-mail';
            }

            return <MaterialIcons name={iconName} size={size + 4} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Tab.Screen name="Portfólio" component={Portfolio} options={{ title: 'Portfólio' }} />
        <Tab.Screen name="Contato" component={Contato} options={{ title: 'Contato' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
