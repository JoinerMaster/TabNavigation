import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ThirdScreen from './components/ThirdScreen';

const RootTabs = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'home'
          : 'home-outline';

      } else if (route.name === 'Settings') {
        iconName = focused
          ? 'settings'
          : 'settings-outline';
      }

      return (
        <Ionicons
          name={iconName}
          size={size}
          color={color}
        />
      );
    },

    tabBarLabelStyle: {
      fontSize: 10,
    },

    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }),

  screens: {
    Home: {
      screen: HomeScreen,
    },

    Settings: {
      screen: SettingsScreen,
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Tabs: {
      screen: RootTabs,
      options: {
        headerShown: false,
      },
    },

    Third: {
      screen: ThirdScreen,
      options: {
        title: 'Tercera pantalla',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}