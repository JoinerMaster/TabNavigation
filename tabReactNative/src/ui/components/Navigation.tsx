import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PhoneNumberScreen from './screens/PhoneNumberScreen';

export type RootStackParamList = {
  Home: undefined;
  PhoneNumber: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />

        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumberScreen}
          options={{ title: "Número telefónico" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;