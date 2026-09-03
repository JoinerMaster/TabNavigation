import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../Navigation";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Registro de teléfono
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("PhoneNumber")}
      >
        <Text style={styles.buttonText}>
          Ir al teléfono
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    marginBottom: 30,
  },

  button: {
    padding: 15,
    backgroundColor: "#ddd",
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
  },
});

export default HomeScreen;