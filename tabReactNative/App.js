import React from 'react';
import { View, Text, Settings } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"; // Permite utilizar iconos de Ionicons

function HomeScreen() {
  return ( 
    // Muestra el texto "Home!" en el centro de la pantalla
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    // Muestra el texto "Settings!" en el centro de la pantalla
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 20 }}>Settings!</Text>
    </View>
  );
}

const RootTabs = createBottomTabNavigator({

  // Muestra el nombre del icono: Home
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName; // Muestra la variable donde se guarda el nombre de los icons

      if (route.name === 'Home') {
        iconName = focused
        ? 'home'
        : 'home-outline';

      }

    // Muestra el nombre del icono: Settings
      else if (route.name === 'Settings') {
        iconName = focused 
        ? 'settings' 
        : 'settings-outline';
      }

      // Devuelve el icono que se mostrará en la pestaña, nombre, tamaño y color
      return <Ionicons name={iconName} size={size} color={color} />;
    },

    // Define el tamaño del texto de Home y Settings
    tabBarLabelStyle: {
      fontSize: 10
    },

    // Muestra el color de los iconos/textos de las pestañas seleccionadas y no seleccionadas
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }),

  // Aquí se registran las dos pantallas que determinan el Tab Navigation
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
      },
    },

    Settings: {
      screen: SettingsScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default function App() {
  return <Navigation />;
}
