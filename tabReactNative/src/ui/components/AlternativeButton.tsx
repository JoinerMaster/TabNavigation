import React from "react"; // Este es el alternativeButton del boton Ingresar
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface AlternativeButtonProps {
  label: string;
  onPress: () => void;
  style?: any;
}

const AlternativeButton = ({ label, onPress }: AlternativeButtonProps) => {

  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >

      <Text style={styles.nombre}>
        {label}
      </Text>
    </TouchableOpacity>

  );

};

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#2692d4",
    padding: 16,
    borderRadius: 3,
    alignItems: "center",
    width: 120,
    marginTop: 20,
  },

  nombre: {
    color: "white",
    fontWeight: "500",
    fontSize: 15
  }
});

export default AlternativeButton;