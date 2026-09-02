import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
    const navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 10}}
    >
      <Text style={{ fontSize: 20, marginBlock: 10}}>Home!</Text>

      <Button
        title="Ir a tercera pantalla"
        onPress={() => navigation.navigate('Third' as never)}
      />
    </View>
  );
}