import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import AlternativeInput from "../atom/AlternativeInput";
import AlternativeImage from "../atom/AlternativeImage";
import AlternativeTextButton from "../atom/AlternativeTextButton";
import AlternativeButtonVolver from "../atom/AlternativeButtonVolver";

export default function FormScreen({ onBack, onSave }) {
  const [nombre, setNombre] = useState("");
  const [elemento, setElemento] = useState("");


  // Validación
  const deshabilitado = nombre.trim() === "" || elemento.trim() === "";

  return (
    <View style={styles.container}>

      <AlternativeImage
        source={require("../assets/android-icon.png")}
        style={styles.image}
      />

      <AlternativeInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <AlternativeInput
        placeholder="Elemento"
        value={elemento}
        onChangeText={setElemento}
      />

      <View style={styles.buttonContainer}>

        <AlternativeTextButton
          label="GUARDAR"
          onPress={() => onSave(nombre, elemento)}
          disabled={deshabilitado}
        />

        <AlternativeButtonVolver
          label="VOLVER"
          onPress={onBack}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    marginTop: 10,
    marginBottom: 80,
    gap: 10,
  },

  buttonPressed: {
    opacity: 0.7
  },

  buttonVolver: {
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  }

});