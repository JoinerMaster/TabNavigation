import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ThirdScreen() {
    const navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 90}}
    >
      <Text style={{ fontSize: 20, marginBlock: 10 }}>Welcome to Navigation!</Text>

      <Button
        title="Volver"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}